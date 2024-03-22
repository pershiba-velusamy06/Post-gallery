import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPostSliceActions } from '../../store/slice/createPostSlice';
import { CreatePost, updatePost } from '../../store/api/fetchEmployeApi';
import { fetchPostSliceActions } from '../../store/slice/fetchPostSlice';
import { useNavigate } from 'react-router-dom';

const CreatePostForm = () => {
  const getAllPosts = useSelector((state) => state.postData);
  const dispatch = useDispatch();
  const navigate = useNavigate()
 



  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPostSliceActions.setLoading())
    setTimeout(() => {
      if (getAllPosts.isEdit) {
        dispatch(updatePost(getAllPosts.PostDetail, getAllPosts.postId)).unwrap().then((response) => {
          console.log(response, "response")
          if(response.status===200){
            dispatch(fetchPostSliceActions.updatePost(response.data))
            dispatch( createPostSliceActions.reset())
            navigate('/')
          }else{
            dispatch( createPostSliceActions.reset()) 
            navigate('/')
          }
         
        })
      } else {
        dispatch(CreatePost(getAllPosts.PostDetail)).unwrap().then((response) => {
          console.log(response, "response")
          dispatch(fetchPostSliceActions.addPostToExsisting(response.data))
          dispatch( createPostSliceActions.reset())
          navigate('/')
        })
      }
    }, 2000)
  }

  return (

    <>
      {
      getAllPosts.isdataLoading && <div className="text-center  text-info-spinner1 overlay-spinner">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    }
    < div className ={ getAllPosts.isdataLoading?"d-flex justify-content-center align-items-center vh-100 add-overlayBg": "d-flex justify-content-center align-items-center vh-100"} >

      <div>
        <h2 className="text-center">{getAllPosts.isEdit?"Edit Post":"Create Post"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" value={getAllPosts.Title} onChange={(e) =>  dispatch(createPostSliceActions.setTitle(e.target.value))} required />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" rows="4" value={getAllPosts.Description} onChange={(e) =>    dispatch(createPostSliceActions.setDescription(e.target.value))} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div >
    
    </>
  
  );
};

export default CreatePostForm;
