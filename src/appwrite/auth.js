import config from "../config/config";
import { Client, Account, ID } from "appwrite";


export class AuthService{ // creating a global class to access it's methods

  client = new Client(); 
  account;

  constructor(){    
    this.client
    .setEndpoint(config.appwriteURL)
    .setProject(config.appwriteProjectId)
    

    this.account = new Account(this.client); 
  }

  async createAccount({email,password,name}){ 
    try {
        const userAccount = await this.account.create(ID.unique(),email,password,name); //  creating an account

        if(userAccount){
         return this.login({email,password}); // logging the created account.
        }
        else{
            console.log("Failed to create a user account");
            
            return userAccount;
        }

    } catch (error) {
        console.log("Create Account error : ",error);
        throw error;
    }
  }

async login({email,password}){
    try {
       const session = await this.account.createEmailPasswordSession(email,password);

       if(session){
        console.log("Session created succesfully");
        return session;
       }

    } catch (error) {
        console.log("Login Error : ",error);
        throw error;
    }
}

async currentUser(){
    try{
        const session = await this.account.getSession('current');

        if(session){
            const result = await this.account.get();
            if(result){
                return result;
            }
        }else{
            console.log("No active session");
        }
    }catch(error){

        if(error.code === 401){
            console.log("User not Logged in error : ",error.message,error.code,error.response);
            return null;
        }

        console.log("Current User Error : ",error);
        throw error;
    }

    return null;
}

async logout(){
    try {
        return await this.account.deleteSessions(); // to logout and deleting the session.
    } catch (error) {
        console.log("Logout Error : ",error);
        throw error;
    }
}

}


const authservice = new AuthService(); 

export default authservice; // creating an object of the class and exporting it for global use.