import React, { useEffect, useState } from 'react';
import './Blog.css';
import CoverImg from '../CoverImg/CoverImg';

const Blog = () => {

const [blogs, setBlogs] = useState([]);
const [title,setTitle] = useState([]);


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


    return (
        <div className='blog-container'>
            <div className="cafe-container">
                    {/* <h4>knowledge cafe{blogs.length}</h4> */}
                    {
                        blogs.map(blog =><CoverImg
                        
                            key = {blog.id}
                            blog= {blog}
                            handleBookmark={handleBookmark}
                        ></CoverImg> )
                    }
            </div>
            <div className="bookmark-container">
                <h4>Bookmarked Blogs :{title.length} </h4>
                <h2>{title.blogTitle}</h2>

            </div>
            
        </div>
    );
};

export default Blog;