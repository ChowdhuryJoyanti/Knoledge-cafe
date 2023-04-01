import React from 'react';
import'./Time.css'

const Time = ({readTime}) => {
    // const readTime = props.readTime;
    console.log(readTime);

    let totalReadTime = 0;
    for(const blog of readTime){
        totalReadTime = totalReadTime + blog.readTime;
    }
    return (
        <div className='time'>
               <h5>Spent time on read :{totalReadTime}min</h5>
               {/* <h4>set times:{readTime.length}</h4> */}
        </div>
    );
};

export default Time;