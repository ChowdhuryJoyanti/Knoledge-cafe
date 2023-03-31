import React, { useEffect, useState } from 'react';
import './Blog.css';
import CoverImg from '../CoverImg/CoverImg';

const Blog = () => {

const [blogs, setBlogs] = useState([]);


useEffect(()=>{
    fetch('fakeData.json')
    .then(res => res.json())
    .then(data => setBlogs(data))

},[])

    return (
        <div className='blog-container'>
            <div className="cafe-container">
                    {/* <h4>knowledge cafe{blogs.length}</h4> */}
                    {
                        blogs.map(blog =><CoverImg
                        
                            key = {blog.id}
                            blog= {blog}
                        ></CoverImg> )
                    }
            </div>
            <div className="bookmark-container">
                <h4>Bookmarked Blogs : </h4>
            </div>
            
        </div>
    );
};

export default Blog;