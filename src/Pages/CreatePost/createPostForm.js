import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPostSliceActions } from '../../store/slice/createPostSlice';
import { CreatePost, updatePost } from '../../store/api/fetchEmployeApi';
import { fetchPostSliceActions } from '../../store/slice/fetchPostSlice';
import { useNavigate } from 'react-router-dom';

const CreatePostForm = () => {
  const getAllPosts = useSelector((state) => state.postData);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleTitleChange = (e) => {
    if (e.target.value) {
      dispatch(createPostSliceActions.setTitle(e.target.value))
    }
  };

  const handleDescriptionChange = (e) => {
    if (e.target.value) {
      dispatch(createPostSliceActions.setDescription(e.target.value))
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(getAllPosts.isEdit){
      dispatch(updatePost(getAllPosts.PostDetail,getAllPosts.postId)).unwrap().then((response) => {
        console.log(response, "response")
        dispatch(fetchPostSliceActions.updatePost(response.data))
        navigate('/')
      })
    }else{
      dispatch(CreatePost(getAllPosts.PostDetail)).unwrap().then((response) => {
        console.log(response, "response")
        dispatch(fetchPostSliceActions.addPostToExsisting(response.data))
        navigate('/')
      })
    }
   
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div>
        <h2 className="text-center">Create Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" value={getAllPosts.Title} onChange={(e) => handleTitleChange(e)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" rows="4" value={getAllPosts.Description} onChange={(e) => handleDescriptionChange(e)} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostForm;
