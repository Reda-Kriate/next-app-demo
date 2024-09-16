import Link from "next/link";

const Card = async () => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();

  return (

    <div>
        {
            data.map((post,i)=>(
                <Link href={`/posts/${post.id}`}>
                <div key={i} className="flex flex-col mt-6 mx-2 p-8 border border-black border-2 rounded-xl hover:bg-slate-200 ">
                    <h1 className="font-bold text-3xl pb-3 ">{post.title}</h1>
                    <p>{post.body}</p>
                </div>
                </Link>
            ))
        }
    </div>

  )
}

export default Card