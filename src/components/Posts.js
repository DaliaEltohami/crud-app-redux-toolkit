import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/postsSlice";
import Post from "./Post";

export default function Posts() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="posts-container">
      <form className="add-post-form">
        <h2 className="form-header">Add Post Form</h2>
        <input
          type="text"
          placeholder="Enter Post Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        ></input>
        <input
          type="text"
          placeholder="Enter Post content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (title && content) {
              dispatch(addPost({ id: Math.random(), title, content }));
              setTitle("");
              setContent("");
            } else {
              alert("Please Enter Post Title And Content");
            }
          }}
        >
          Submit
        </button>
      </form>
      <div className="posts">
        <h4 className="posts-header">Posts</h4>
        {posts.length > 0 ? (
          posts.map((post) => <Post post={post} key={post.id} />)
        ) : (
          <div>There Is No Posts</div>
        )}
      </div>
    </div>
  );
}
