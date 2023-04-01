import React from 'react';
import'./CoverImg.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCoffee } from '@fortawesome/free-solid-svg-icons'


const CoverImg = (props) => {
    // console.log(props);
    // console.log(props.blog);
    const {authorName,blogTitle,coverImg,img,readTime,publishDate} = props.blog

    const handleBookmark = props.handleBookmark;
    const handleTime = props.handleTime;

    

    return (
        <div>
            {/* <img className='img-fluid  mt-5 CoverImage' src={coverImg} alt="" />
            <img className="authorImage" src={img} alt="" />
            <h5>{authorName}</h5>
            <h3>{blogTitle}</h3>
            <p>#beginners</p>
            <p>#programming</p>
 */}


 



<div className="row container">
 <div class="card  col-12 mt-5">
   <img src={coverImg} class="card-img-top CoverImage img-fluid" alt="..."/>
   <div class="card-body">
  {/* <img className="authorImage" src={img} class="card-img-top" alt="..."/> */}
  <div className='d-flex'>
  <div className='d-flex py-2'>
   <img className="authorImage" src={img} alt="" />

    <div className="m-3">
    <h5>{authorName}</h5>
     <p class="card-text">{publishDate}</p>
    </div>
  
   </div>

  </div>
 


  <div className='d-flex justify-content-end flex-end'>
    <p class="card-text px-3">{readTime}</p>
    <p onClick={()=>handleBookmark(props.blog)}><FontAwesomeIcon icon={faBookmark} /> </p>
    </div>
    <h2 class="card-title">{blogTitle}</h2>
   <div className='d-flex mt-4'>
    <p className='px-3'> #beginners</p>
    <p className=''>#programming</p>
   </div>
   
 </div>
   <div class="card-body">
    <a onClick={()=>handleTime(props.blog)} href="#" class="card-link">Mark as read</a>
    
  </div>
 </div>
 </div> 


  </div>




    );
};

export default CoverImg;