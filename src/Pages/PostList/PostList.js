import React, { useEffect, useRef } from 'react';
import './Post.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createPostSliceActions } from '../../store/slice/createPostSlice';
import { fetchPostSliceActions } from '../../store/slice/fetchPostSlice';

const PostList = ({ Post, isLoading, isDeleteLoading, deleteId, isCreateLoading }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const scrollToRef = useRef(null);
 
    useEffect(() => {
        if (isCreateLoading!=="") {

            const element = document.getElementById(isCreateLoading); // Assuming you have a state variable named scrollToId holding the ID you want to scroll to
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
            setTimeout(() => {
                dispatch(fetchPostSliceActions.createLoading());
            }, 1000);
        }
    }, [dispatch, isCreateLoading]); 

    const EditPost = (PostData) => {
        dispatch(createPostSliceActions.setEditData(PostData));
        navigate('/editPost');
    };

    const deletePost = (PostData) => {
        dispatch(fetchPostSliceActions.deleteLoading(PostData.id));
        setTimeout(() => {
            dispatch(fetchPostSliceActions.deletePost(PostData));
        }, 2000);
    };

    return (

        <>
        
            <div className="container">
                {isLoading  ? (
                    <div className="text-center  text-info-spinner">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className="row row-cols-1 row-cols-md-3">
                        {Post.map((postDetails, index) => (
                            <div key={index} className="col mb-4 d-flex align-items-stretch" id={postDetails?.id}  ref={scrollToRef}>
                                <div className="card w-100">
                                    <div className="card-body d-flex flex-column " >
                                        <h5 className="card-title">{postDetails.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">User ID: {postDetails.userId}</h6>
                                        <p className="card-text flex-grow-1">{postDetails.body}</p>
                                        <p className="card-text">Post ID: {postDetails?.id}</p>
                                        <div className="mt-auto button-display">
                                            <button className=" bg-white  btn-delete-css" onClick={() => deletePost(postDetails)}>
                                                delete
                                            </button>
                                            <button className="bg-white  btn-edit-css" onClick={() => EditPost(postDetails)}>
                                                Edit
                                            </button>
                                            {isDeleteLoading && deleteId === postDetails?.id && (
                                                <div className="text-center mt-2">
                                                    <div className="spinner-border spinner-border-md text-danger" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </>



    );
};

export default PostList;
