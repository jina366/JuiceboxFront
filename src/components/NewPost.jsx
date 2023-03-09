import React, { useState, useEffect } from "react";
import { newPost } from "../apiAdapters";

function NewPost() {
  let [newTitle, setNewTitle] = useState("");
  let [newContent, setNewContent] = useState("");
  let [newTags, setNewTags] = useState("");
//   let [tempTag, setTempTag] = useState("");

  async function sendPost(title, content, tags) {
    try {
      const result = await newPost(title, content, tags);
      localStorage.setItem(result.title, result.content, result.tags);
      setNewTitle("");
      setNewContent("");
      setNewTags("");
    //   setTempTag("");
      console.log(result)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Add Post</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendPost(newTitle, newContent, newTags);
        }}
      >
        <h1>Title</h1>
        <input
          name="title"
          type="text"
          required
          value={newTitle}
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />

        <h1>Content</h1>
        <input
          name="content"
          type="text"
          required
          value={newContent}
          onChange={(e) => {
            setNewContent(e.target.value);
          }}
        />
        <h1>Tags</h1>
        <input
          name="tags"
          type="text"
          required
          value={newTags}
          onChange={(e) => {
            setNewTags(e.target.value);
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewPost;
