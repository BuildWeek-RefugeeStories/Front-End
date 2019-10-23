import React from 'react';

const StoriesCards = () => {
    return (
        <div className='StoriesCards'>
             <div className='stories-info'>
                 <div className='story-Title'>
                     <h1>Rebuilding Home</h1>
                     <h3>Elias G.</h3>
                 </div>
                 <div className='story-Text'>
                     <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                 </div>
             </div> {/* stories-info end */}
             <div className='card-Img'>
                 <img src='https://pbs.twimg.com/media/DvUzKCSWwAA3FbS.jpg'></img>
             </div>
        </div> /* StoriesCards end */
    )
}

export default StoriesCards;