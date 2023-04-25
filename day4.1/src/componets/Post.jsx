import React, { useState } from 'react'
import "./Post.css"

const PostItem=({id, title, price, description, category, image})=>{
    return (
        <div className='card'>
            <img src={image}  alt='img'/>
            <h2>{id}</h2>
            <h2>{title}</h2>
            <h2>{price}</h2>
            <p>{description}</p>
            <h3>{category}</h3>
        </div>
    )
}


const getData = (url) => {
    return fetch(url)
      .then((res) => res.json())
      .catch(() =>{
          throw new Error("something is wrong")
      });
  
  };

const Post = () => {
    const [loading , setLoading] = useState(false)
    const [post, setPost]=useState([])
    const [error, setError]=useState(false)

    const fetchApi= async ()=>{

        try {

            setLoading(true)
            const data = await getData(`https://fakestoreapi.com/products`)
            console.log(data);
            setPost(data)
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
            console.log(error);
        }

    }
    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>Something went wrong....</h1>
    }
  return (
    <div className='post'>
      <h1>Posts</h1>
      <button onClick={fetchApi}>Click this button to get posts</button>
      <hr />
      <div>
        {
            post.map((postItem)=>(
               <PostItem key={postItem.id} title={postItem.title} price={postItem.price} description={postItem.description} category={postItem.category} image={postItem.image}/> 
            ))
        }
      </div>
    </div>
  )
}

export default Post

// https://fakestoreapi.com/products