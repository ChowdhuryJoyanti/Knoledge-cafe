import React, { useEffect, useState } from 'react';
import './Blog.css';
import CoverImg from '../CoverImg/CoverImg';
import BlogTitle from '../BlogTitle/BlogTitle';
import Title from '../Titles/Title';
import Time from '../Time/Time';

const Blog = () => {

const [blogs, setBlogs] = useState([]);
const [title,setTitle] = useState([]);
const [readTime,setReadTime] = useState([])


useEffect(()=>{
    fetch('fakeData.json')
    .then(res => res.json())
    .then(data => setBlogs(data))

},[])


const handleBookmark = (blog) => {
    // console.log(blog);
    const newTitle = [...title,blog];
    setTitle(newTitle);

}


const  handleTime = (blog) => {
    // console.log(blog);
    const newReadTime = [...readTime,blog]
    setReadTime(newReadTime)

  }



    return (
        <div className='blog-container'>
            <div className="cafe-container">
                    {/* <h4>knowledge cafe{blogs.length}</h4> */}
                    {
                        blogs.map(blog =><CoverImg
                        
                            key = {blog.id}
                            blog= {blog}
                            handleBookmark={handleBookmark}
                            handleTime={handleTime}
                        ></CoverImg> )
                    }
            </div>
            <div className="bookmark-container">
                
                    <div className="time-container">
                     {/* <Time time={readTime}></Time> */}
                     <Time readTime={readTime}></Time>

                    
                    </div>
               <div className="header-container">
                 {/* <BlogTitle blogTitle={title}></BlogTitle> */}
              <Title title={title}></Title>
               </div>

            </div>
            
        </div>
    );
};

export default Blog;