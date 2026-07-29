import React, {useState} from "react";

const Feed = () =>{
    const [posts, setPosts] = useState([
    {
        _id:"1",
        image:"https://cdn.magicdecor.in/com/2024/08/28151121/Aasma-Beach-Sunset-Serenity-Wallpaper-Mural.jpg",
        caption:"beautiful sunset",
    }
    ])
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