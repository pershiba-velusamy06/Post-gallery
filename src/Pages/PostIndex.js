import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PostListWrapper from './PostList/PostListWrapper';
import CreatePostIndex from './CreatePost/createPostIndex'

const PostIndex = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostListWrapper />} />
        <Route path="/createPost" element={<CreatePostIndex />} />
        <Route path="/editPost" element={<CreatePostIndex />} />
      </Routes>
    </Router>
  );
};

export default PostIndex;
