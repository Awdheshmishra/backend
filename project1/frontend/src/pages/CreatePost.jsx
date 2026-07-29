import React from "react";
import axios from "axios"
import {Navigate, useNavigate} from "react-router-dom"

const CreatePost = () =>{
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        //ye isliye ja rh hai kyuki jab ham is particular form ko submit krnege to hamra page reload na ho

        const formData = new FormData(e.target)

        axios.post("http://localhost:3000/create-post",formData)
        .then((res)=>{
            // alert("post created successfully")
            // e.target.reset()

            // console.log(res)

            navigate("/feed")
        })
        .catch((err)=>{
            console.log(err)
            alert("Error creating post")
        })

    }
    return(
        <section className="create-post-section">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit} >
                <input type="file" name="image" accept="image/*" />
                <input type="text" name="caption" required />
                <button type="submit">Submit</button>
            </form>

        </section>
    )
}
export default CreatePost