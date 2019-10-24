import React from 'react';
import { Link } from 'react-router-dom';

const StoriesCards = (props) => {
    console.log('PROPS..', props)
    return (
        <div className='StoriesCards'>
        <div className='stories-info'>
            <div className='story-Title'>
                <h1>{props.newData.title}</h1>
                <h3>{props.newData.author.name}</h3>
            </div>
            <div className='story-Text'>
                <p>{props.newData.body}</p>
            </div>
        </div> 
        <div className='card-Img'>
            <img src='https://pbs.twimg.com/media/DvUzKCSWwAA3FbS.jpg'></img>
        </div>
   </div>  
    )
}

export default StoriesCards;