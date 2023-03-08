import React, { useState, useEffect } from "react";
import { getAllPost } from "../apiAdapters";

const AllPosts = () => {
  let [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const result = await getAllPost();
      console.log(result.posts);
      setPosts(result.posts);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  console.log(posts);
  return (
    posts.map((post, idx) => {
    return (
      <div key={idx}>
        <h1>{post.title}</h1>
        <h2>{post.content}</h2>
        {post.tags.map((tag, idx) => {
            return(
            <div key={idx}>
            <p>{tag.name}</p>
            </div>)
        })}
      </div>
    );
  }));
};

export default AllPosts;
