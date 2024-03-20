import React from 'react'
import './Post.css'
import { useNavigate } from 'react-router-dom'
const PostHeader = () => {
  const navigate = useNavigate()


  return (
    <div style={{ backgroundColor: '#008080' }} className="py-3 mb-4">
      <div className="container mx-auto PostHeader items-center">
        <h1 className="text-white text-2xl font-bold">Posts</h1>
        <div>
          <button className="bg-white createButton" onClick={()=>navigate('/createPost')}>Create Post</button>
        </div>
      </div>
    </div>
  )
}

export default PostHeader
