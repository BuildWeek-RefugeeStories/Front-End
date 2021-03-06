import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({data:{title, author, body, createdAt, likes, _id}}) => {
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
        </div> /* StoriesCards end */
    )
}

export default HomeCard;