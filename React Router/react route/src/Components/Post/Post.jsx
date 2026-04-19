import React from 'react';
import './Post.css'
import { Link } from 'react-router';
import { useNavigate } from "react-router";
const Post = ({post}) => {

    
     let navigate = useNavigate();

     const handleNavigate =()=>{
        navigate(`/posts/${post.id}`);
     }

    return (
        <div className='card'>
            <p>{post.title}</p>
            <Link to={`/posts/${post.id}`}>Show details</Link>
            <button onClick={handleNavigate}>details of: {post.id}</button>
        </div>
    );
};

export default Post;