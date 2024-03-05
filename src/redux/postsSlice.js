import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      state.posts.map((post) => {
        if (post.id === action.payload.id) {
          post.title = action.payload.title;
          post.content = action.payload.content;
        }
      });
    },
  },
});

export const { addPost, deletePost, updatePost } = postsSlice.actions;

export default postsSlice.reducer;
