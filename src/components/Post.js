import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost, updatePost } from "../redux/postsSlice";

export default function Post({ post }) {
  const [updatedTitle, setUpdatedTitle] = useState(post.title);
  const [updatedContent, setUpdatedContent] = useState(post.content);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="post">
      <h4 className="post-title">{post.title}</h4>
      <p className="post-content">{post.content}</p>
      <div className="post-buttons">
        <button
          onClick={() => {
            setIsEdit(true);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            dispatch(deletePost(post.id));
          }}
        >
          Delete
        </button>
      </div>

      {isEdit && (
        <div className="edit-form">
          <h4 className="form-header">Edit Form</h4>
          <input
            type="text"
            placeholder="Edit Post title"
            value={updatedTitle}
            onChange={(e) => {
              setUpdatedTitle(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="Edit Post Content"
            value={updatedContent}
            onChange={(e) => {
              setUpdatedContent(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              dispatch(
                updatePost({
                  id: post.id,
                  title: updatedTitle,
                  content: updatedContent,
                })
              );
              setIsEdit(false);
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
