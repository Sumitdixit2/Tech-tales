import config from "../config/config";
import { Client,ID,Query,Databases,Storage } from "appwrite";



export class DatabaseService{
    client = new Client();
    database;
    storage;

    constructor(){
        this.client
        .setEndpoint(config.appwriteURL)
        .setProject(config.appwriteProjectId);

        this.database = new Databases(this.client);
        this.storage = new Storage(this.client);
    }



  async createPost({title,slug,content,featuredImage,status,userId}){
    try {
        return await this.database.createDocument(config.appwriteDatabaseId,config.appwriteCollectionId,ID.unique(),
        {
          title,
          content,
          featuredImage,
          status,
          slug,
          userId
        });
    } catch (error) {
        console.log(error);
    }
  }

  async updatePost(slug,{title,content,featuredImage,status}){
     try {
       return await this.database.updateDocument(config.appwriteDatabaseId,config.appwriteCollectionId,slug,{
        title,
        content,
        featuredImage,
        status
      })
     } catch (error) {
      return error;
     }
  }

  async deletePost(slug){
    try {
       await this.database.deleteDocument(config.appwriteDatabaseId,config.appwriteCollectionId,slug);
       return true;

    } catch (error) {
      return error;
    }
  }

  async getPost(slug){
    try {
      return await this.database.getDocument(config.appwriteDatabaseId,config.appwriteCollectionId,slug);
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  
  async getPosts(queries) {
  try {
    const validQueries = queries?.length ? queries : [Query.equal("status", "active")];
    
    return await this.database.listDocuments(config.appwriteDatabaseId, config.appwriteCollectionId, validQueries);
  } catch (error) {
    console.log(error);
    return false;
  }
}


  // file uploading services

  async fileUpload(fileId){
    try {
      return await this.storage.createFile(config.appwriteBucketId,ID.unique(),fileId)
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async fileDelete(fileId){
   try {
     await this.storage.deleteFile(config.appwriteBucketId,fileId)
     return true;
   } catch (error) {
    console.log(error);
    return false;
   }
  }

  filePreview(fileId){
    return this.storage.getFilePreview(config.appwriteBucketId,fileId)
  }

  fileView(fileId){
    return this.storage.getFileView(config.appwriteBucketId,fileId)
  }

  getFile(fileId){
    return this.storage.getFile(config.appwriteBucketId,fileId)
  }

  fileDownload(fileId){
    return this.storage.getFileDownload(config.appwriteBucketId,fileId)
  }
}

const databaseService = new DatabaseService();

export default databaseService; // creating an object of the above class and exporting it.

