import React from 'react'
import databaseService from '../appwrite/configuration';
import { redirect } from 'react-router-dom';

  

    export const PostLoader = async ({params}) => {
            try {
                const {slug} = params;
                const fetchedPost = await databaseService.getPost(slug);

                if (!fetchedPost) return redirect("/");

                return fetchedPost;
            } catch (error) {
                console.error("Error fetching post:", error);
                 return redirect("/");
            }
        };


