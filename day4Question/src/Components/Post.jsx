import React from "react";
const Post = () => {
  return (
    <div className="post">
      <h1>
        {/* Here show the title of the post  */}
      </h1>
      <h3>
        {/* Here show the body of the post  */}
      </h3>
    </div>
  );
};

export default Post;










// ------------
// import "./App.css";
// import Posts from "./components/Posts";

// function App() {
//   return (
    // <div className="App">
    //   <Posts />
    // </div>
//   );
// }

// export default App;

// ------ post components -------

// import React, { useState } from "react";

// const PostItem=({id, title,body})=>{
//     return(

//     <div style={{border:'1px solid red' , margin:'30px' }}>
//         <h2>{id}</h2>
//         <h4>{title}</h4>
//         <h3>{body}</h3>
//     </div>
//     )
// }

// const getData = (url) => {
//   return fetch(url)
//     .then((res) => res.json())
//     .catch(() =>{
//         throw new Error("something is wrong")
//     });

// };

// const Posts = () => {
//   const [loading, setLoading]= useState(false)  
//   const [posts, setPosts] = useState([]);
//   const [error, setError] = useState(false)

//   const fetchAndUpdateData = async () => {
//     // console.log("fetch and update date called");
//     // get data
//     // update my ui with that data
//     try {
//         setLoading(true)
//       // make fetch request and get the data
//       const data = await getData(
//         `https://jsonplaceholder.typicode.com/posts?_limit=10`
//       );
//       console.log(data);
//       setPosts(data);
//       setLoading(false)
//     } catch (error) {
//         setError(true)
//         setLoading(false)
//         console.log(error);
//     }
//   };

//   if(loading){
//     return <h1>Loading...</h1>
//   }
//   if(error){
//     return <h1>Something is wrong...</h1>
//   }

//   return (
//     <div>
//       <h1>Posts</h1>
//       <button onClick={fetchAndUpdateData}>
//         Click this button to get post
//       </button>
//       <hr />
//       <div>
//       {
//       posts.map((postItem)=>(
//         <PostItem key={postItem.id} title={postItem.title} body={postItem.body}/>
//       ))
//       }

//       </div>
//     </div>
//   );
// };

// export default Posts;
