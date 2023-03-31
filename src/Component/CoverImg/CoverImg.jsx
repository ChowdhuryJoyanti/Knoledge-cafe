import React from 'react';
import'./CoverImg.css';

const CoverImg = (props) => {
    console.log(props.blog);
    const {authorName,blogTitle,coverImg,img,readTime,publishDate} = props.blog
    return (
        <div>
            {/* <img className='img-fluid  mt-5 CoverImage' src={coverImg} alt="" />
            <img className="authorImage" src={img} alt="" />
            <h5>{authorName}</h5>
            <h3>{blogTitle}</h3>
            <p>#beginners</p>
            <p>#programming</p>
 */}



<div class="card">
  <img src={coverImg} class="card-img-top" alt="..."/>
  <div class="card-body">
  {/* <img className="authorImage" src={img} class="card-img-top" alt="..."/> */}
 <div className='d-flex'>
 <div className='d-flex py-2'>
  <img className="authorImage" src={img} alt="" />
   <div className="m-3">
   <h5>{authorName}</h5>
    <p class="card-text">{publishDate}</p>
   </div>
   <div className='justify-content-end'>
   <p class="card-text">{readTime}</p>
   </div>
  </div>
 </div>
    <h5 class="card-title">{blogTitle}</h5>
   
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>







        </div>





    );
};

export default CoverImg;