import React from 'react';
import { useNavigate } from "react-router";
import { useLoaderData } from 'react-router';

const PostDetail = () => {
    const postDetail= useLoaderData();
     let navigate = useNavigate();
    return (
        <div>
         
          <p>  {postDetail.body} </p>

          <button onClick={()=> navigate(-1)}>Go back</button>
            
        </div>
    );
};

export default PostDetail;