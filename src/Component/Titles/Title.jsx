import React from 'react';
import'./Title.css';

const Title = ({title}) => {
    // const title = props.title;
    // console.log(title);
    // const blogTitle = title;
    // for(const blog of title){
    //     blogTitle = title
    // }


    return (
        <div>
            <h4>Bookmarked Blogs :{title.length} </h4>
            {/* {
                title.map((titles)=>{title.titles})
            } */}
              {/* <h2>{blogTitle}</h2> */}
        </div>
    );
};

export default Title;