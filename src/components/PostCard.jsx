import React from 'react';
import databaseService from '../appwrite/configuration';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

function PostCard({ post,forHome=false}) {
  
    
    if(!post) return null;

       if(!forHome){
         return (
           <Link to={`/post/${post.$id}`}>
      <div className="w-full  rounded-xl p-4 ml-5">
        <div className="w-full flex justify-center mb-4">
            
          {post.featuredImage && (
            <img
            src={databaseService.fileView(post.featuredImage)}
            alt={post.title}
            className="rounded-xl max-h-60 object-cover"
            />
          )}
        </div>
        <h2 className="text-xl font-bold text-center text-gray-200">{post.title}</h2>
        <span className='mt-5 text-center text-[#999999]'>{parse(post.content)}</span>
      </div>
    </Link>
  );
}else{
  return(
            <div class="p-4">
              <div class="flex items-stretch justify-between gap-4 rounded-xl">
                <div class="flex flex-[2_2_0px] flex-col gap-4">
                  <div class="flex flex-col gap-1">
                    <p class="text-white text-base font-bold leading-tight">{post.title}</p>
                    <p class="text-[#adadad] text-sm font-normal leading-normal">
                      {parse(post.content)}
                    </p>
                  </div>
                  <Link to={`post/${post.$id}`}>
                  <button
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#363636] text-white text-sm font-medium leading-normal w-fit mt-4"
                    >
                    <span class="truncate">Read More</span>
                  </button>
                    </Link>
                </div>
                <img
            src={databaseService.fileView(post.featuredImage)}
            alt={post.title}
            className="rounded-xl max-h-60 object-cover"
            />
              </div>
              </div>

  )
}    
}  


export default PostCard;
