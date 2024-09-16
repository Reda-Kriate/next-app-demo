import PostDetComp from '@/app/components/PostDetComp';
import React, { Suspense } from 'react'


const postDetails = async ({params}) => {
    const postID = params.postId;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`,{
        next:{
            revalidate: 60
        }
    });
    const data = await response.json();


  return (
        <div className='flex flex-col justify-center items-center mt-10 my-4'>
            <h2 className='font-bold text-xl mb-16 bg-red-500 w-1/3 text-center py-4 text-white border border-2 border-black rounded-full '>
                Post details
            </h2>
            <Suspense fallback={<div><h1>Tsna Chwiya ....</h1></div>}>
            <PostDetComp postId = {postID}/>
            </Suspense>
            </div>

  )
}

export default postDetails;