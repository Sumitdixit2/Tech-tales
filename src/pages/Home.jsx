import React from 'react'
import {Container, PostCard} from '../components'
import { Link, useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
    const isLoggedIn = useSelector((state) => state.auth.status);

    const posts= useLoaderData();
  
    if (!isLoggedIn) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <main className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col w-[512px]  py-5 max-w-[960px] flex-1">

          <h2 className="text-gray-100 tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
            Join Tech Tales
          </h2>

        
          <p className="text-gray-100 text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
            Create an account to personalize your homepage, follow your favorite authors and publications, applaud stories you love, and more.
            Unlock exclusive content, engage with a vibrant community, and share your own stories with the world.
          </p>

        
          <div className="flex px-4 py-3 justify-center">
            <button
              className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-full h-10 px-4 bg-black text-neutral-50 text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">
                <Link to="/signup">
                Get Started
                </Link>
                </span>
            </button>
          </div>

          <p className="text-neutral-500 text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
            By continuing, you agree to our Terms of Service and acknowledge that our Privacy Policy applies to you.
          </p>

        </div>
      </main>
                        </div>
                    </div>
                </Container>
            </div>
        )

        
    }

    if(isLoggedIn && posts.length === 0){
        return(
            <div className="w-full py-8 mt-4 text-center">
  <Container>
    <div className="flex flex-wrap">
      <div className="p-2 w-full">
        <main className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] py-5 max-w-[960px] flex-1">

            <h2 className="text-gray-100 tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              Write Your First Post
            </h2>

            <p className="text-gray-100 text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
              Share your thoughts, experiences, and ideas with the world. Connect with like-minded individuals, build your voice, and become a part of a growing tech community.
              Your journey as a creator starts with a single post—make it count!
            </p>

            <div className="flex px-4 py-3 justify-center">
              <button
                className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-full h-10 px-4 bg-black text-neutral-50 text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">
                  <Link to="/add-post">
                    Start Writing
                  </Link>
                </span>
              </button>
            </div>

            <p className="text-neutral-500 text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
              By posting, you agree to our content guidelines and community policies.
            </p>

          </div>
        </main>
      </div>
    </div>
  </Container>
</div>

        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-col items-end flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full'>
                            <PostCard post={post} forHome={true}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home