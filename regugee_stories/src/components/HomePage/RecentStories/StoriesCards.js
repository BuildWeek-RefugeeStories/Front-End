<<<<<<< HEAD
import React from "react";

const StoriesCards = ({ title, author, body, createdAt, likes }) => {
    return (
        <div className="StoriesCards">
            <div className="stories-info">
                <div className="story-Title">
                    <h1>{title}</h1>
                    <h3>{author.name}</h3>
                </div>
                <div className="story-Text">
                    <p>{body}</p>
                </div>
            </div>{" "}
            {/* stories-info end */}
            <div className="card-Img">
                <img src="https://pbs.twimg.com/media/DvUzKCSWwAA3FbS.jpg"></img>
            </div>
=======
import React from 'react';
import { Link } from 'react-router-dom';

const StoriesCards = ({data:{title, author, body, createdAt, likes, _id}}) => {
    console.log('id', _id)
    return (
        <div className='StoriesCards'>
        <Link to={`posts/${_id}`}>
             <div className='stories-info'>
                 <div className='story-Title'>
                     <h1>{title}</h1>
                     <h3>{author.name}</h3>
                 </div>
                 <div className='story-Text'>
                     <p>{body}</p>
                 </div>
             </div> {/* stories-info end */}
        </Link>
             <div className='card-Img'>
                 <img src='https://pbs.twimg.com/media/DvUzKCSWwAA3FbS.jpg'></img>
             </div>
>>>>>>> 1cc7fc423e3a6c95078ef505133e1a86aa02bd12
        </div> /* StoriesCards end */
    );
};

export default StoriesCards;
