import React, {useState,useEffect} from "react";
import axios from "axios"
const Feed = () =>{
    const [posts, setPosts] = useState([
    {
        _id:"1",
        image:"https://cdn.magicdecor.in/com/2024/08/28151121/Aasma-Beach-Sunset-Serenity-Wallpaper-Mural.jpg",
        caption:"beautiful sunset",
    }
    ])

//agar useeffect nhi call krnge to api hai multiple time use hoti rhegii

useEffect(()=>{
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
        setPosts(res.data.posts)
        // console.log(res.data)
    })
},[])


    return(
        <section className="feed-section">

{
    posts.length > 0 ?(
        posts.map((post)=>(
            <div key={post._id} className="post-card">
                <img src={post.image} alt={post.caption} />
                <p>{post.caption}</p>
                </div>
        ))
    ):(
        <h1>No posts available</h1>
    )
}
            
        </section>
    )
}

export default Feed