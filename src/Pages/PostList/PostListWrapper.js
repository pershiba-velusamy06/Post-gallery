import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost } from '../../store/api/fetchEmployeApi';
import PostList from './PostList';
import PostHeader from './PostHeader';
const PostListWrapper = () => {
    const getAllPosts = useSelector((state) => state.fetchPost);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPost());
    }, [dispatch]);

  return (
    <div>
        <PostHeader></PostHeader>
      <PostList Post={getAllPosts.AllPostList} ></PostList>
    </div>
  )
}

export default PostListWrapper
