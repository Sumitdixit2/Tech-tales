import React from 'react';
import { PostCard } from '../components';
import { useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';


function AllPost() {
  const posts = useLoaderData();
  const userData = useSelector((state) => state.auth.userData);


 const result = posts.filter((post) => post?.userId === userData?.$id )
  

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-1 justify-center px-40 py-5">
        <div className="flex flex-col max-w-[960px] w-full">
          {/* Title + New Post */}
          <div className="flex flex-wrap justify-between items-center gap-3 p-4">
            <h1 className="text-[32px] font-bold leading-tight text-gray-200">Your Posts</h1>

          </div>

          {/* Search */}
          <div className="px-4 py-3">
            <label className="flex flex-col w-full h-12">
              <div className="flex h-full items-center rounded-xl bg-[#363636]">
                <div className="pl-4">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                  </svg>
                </div>
                <input
                  className="w-full bg-[#363636] text-white placeholder-[#adadad] px-4 border-none outline-none rounded-r-xl"
                  placeholder="Search your posts"
                />
              </div>
            </label>
          </div>

          {/* Tabs */}
          <div className="pb-3 px-4 border-b border-[#4d4d4d] flex gap-8">
            <a className="pb-3 border-b-[3px] border-white font-bold text-sm text-gray-200">All Posts</a>
            <a className="pb-3 text-gray-200 text-sm font-bold border-b-[3px] border-transparent">Drafts</a>
          </div>
        
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            {posts?.length > 0 ? (
              result.map((post) => (
                <div key={post.$id} className="flex flex-col gap-3">
                <PostCard post={post} forHome={false}/>
                </div>
              ))
            ) : (
              <p className="text-white text-sm px-4">No posts available.</p>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}

export default AllPost;
