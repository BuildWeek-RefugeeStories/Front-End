import React from 'react';

const ApprovedCard = ({data:{title, author, body, createdAt, likes, _id}}) => {
    return (
        <div className='StoriesCards'>
             <div className='stories-info'>
                 <div className='story-Title'>
                     <h1>{title}</h1>
                     <h3>{author.name}</h3>
                 </div>
                 <div className='story-Text'>
                     <p>{body}</p>
                 </div>
             </div> {/* stories-info end */}
             <div className='card-Img'>
                 <img src='https://pbs.twimg.com/media/DvUzKCSWwAA3FbS.jpg'></img>
             </div>
        </div> /* StoriesCards end */
    )
}

export default ApprovedCard ;