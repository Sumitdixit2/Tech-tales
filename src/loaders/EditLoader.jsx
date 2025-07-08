import React from 'react'
import databaseService from '../appwrite/configuration';
import { redirect } from 'react-router-dom';


export const EditLoader = async({params}) => {
   try{

       const {slug} = params;

       if(slug){
        const result = await databaseService.getPost(slug);
        if(result){
         return result;
        }
        else{
            console.log("Result not found");
            return redirect("/");
        }
    }else{
        console.log("Slug not found");
    }
}catch(error){
  console.log("Edit Error : ",error);
}
}