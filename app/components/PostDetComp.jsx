

const PostDetComp = async ({postId}) => {

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
        next:{
            revalidate: 60
        }
    });
    const data = await response.json();

    await new Promise((resolve) => {
        setTimeout(()=>{
            resolve()
        },2000)
        
    })

  return (

            <div className='text-center bg-green-300 py-6 px-4 border border-2 border-black rounded-lg mx-3'>
                <h1 className='font-extrabold text-3xl mb-6 '>
                    {data.title}
                </h1>
                <p>
                    {data.body}
                </p>
            </div>

  )
}

export default PostDetComp;