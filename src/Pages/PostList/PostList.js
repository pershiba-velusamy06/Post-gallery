import React from 'react';
import './Post.css'
const PostList = ({ Post }) => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3">
                {Post.map((postDetails, index) => (
                    <div key={index} className="col mb-4 d-flex align-items-stretch">
                        <div className="card w-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{postDetails.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">User ID: {postDetails.userId}</h6>
                                <p className="card-text flex-grow-1">{postDetails.body}</p>
                                <p className="card-text">Post ID: {postDetails?.id}</p>
                                <div className="mt-auto button-display">
                                <button className= " bg-white  btn-delete-css">delete</button>
                                    <button className="bg-white  btn-edit-css" >Edit</button>
                               
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;
