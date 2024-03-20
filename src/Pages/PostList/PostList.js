import React from 'react';


const PostList = ({Post}) => {
   

    return (
        <div className="container">
            <div className="row">
                {Post.map((postDetails, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{postDetails.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">User ID: {postDetails.userId}</h6>
                                <p className="card-text">{postDetails.body}</p>
                                <p className="card-text">Post ID: {postDetails?.id}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;
