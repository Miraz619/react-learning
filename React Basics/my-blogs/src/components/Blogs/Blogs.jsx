
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {


        const [blogs, setBlogs]=useState([]);

        const [bookmarked,setBookmarked]=useState([]);

        const [readtime, setReadtime]=useState(0);


        useEffect(()=>{

            fetch("blogs.json").then(res => res.json())
            .then(data=>setBlogs(data))
        },[])

   
      
        const handleBookMark =(blog) =>{

            
          setBookmarked([...bookmarked,blog]);


        }


        const handleReadTime = (time,id)=>{


              let newReadTime=readtime+time;

              setReadtime(newReadTime);


              removeBookMarked(id);
                

        }

        const removeBookMarked =(id)=> {

                 const remainingBookmarked=bookmarked.filter(mark => mark.id!=id);

                 setBookmarked(remainingBookmarked);

        };


    return (
        <div>
            
          

           


           <div className='main-containe flex '>    

          <div className='left-container w-[70%]'>


            <h3 className='text-3xl'>total : {blogs.length}</h3>


            <div className='all-blogs grid grid-cols-2'>

             {

                blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookMark={handleBookMark} handleReadTime={handleReadTime}></Blog> )
             }
            </div>

          </div>
            

          <div className='right-container w-[30%]'>
             
                            <h1>bookmarke count : {bookmarked.length}</h1>
                            <h1>reading time : {readtime}</h1>


                            {

                                bookmarked.map(book=> <p>{book.title}</p>)
                            }
          </div>

          </div>

        </div>
    );
};

export default Blogs;