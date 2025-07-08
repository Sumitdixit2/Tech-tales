import React from 'react'
import { Query } from "appwrite";
import databaseService from "../appwrite/configuration";

export const AllLoader = async () => {
            const result = await databaseService.getPosts([Query.equal("status","active")]);

            const document = result.documents;

            if (result && document && result) {
                return document
            }else{
                 console.log("Document not found or result not created");
                 
            }
        };