import React, { useState, useEffect } from "react";
import { getAllPost } from "../apiAdapters";

const AllPosts = () => {
    let [posts, setPosts] = useState([])

    async function getPosts () {
        try {
            const result = await getAllPost();
            setPosts(result.posts)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div>
            <h1>{posts.title}</h1>
        </div>
    )
}

export default AllPosts