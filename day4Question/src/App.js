import { useState } from "react";
import "./App.css";
import Post from "./Components/Post";

const getData=(url)=>{
  return fetch(url)
  .then((res)=>res.json())
  .catch((err)=>console.log(err))
}



function App() {
  const [post, setPost] = useState([])

  const fetchData=async ()=>{
    try {
      const data = await getData(`https://jsonplaceholder.typicode.com/posts`)
      console.log(data);
      setPost(data)
    } catch (error) {
      console.log(error);
      
    }
  }


  return (
    <div className="App" data-testid="app">
      <button
        id="get-posts-btn"
        onClick={fetchData}
      >
        GET POSTS
      </button>
      <div id="post-container">
        {/*  map through the posts data and pass props to the Posts component */}
        {
          post.map((postItem)=>(
            <Post key={postItem.id} title={postItem.title} body={postItem.body}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
