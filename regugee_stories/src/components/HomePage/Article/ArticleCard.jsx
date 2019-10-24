import React, {useState , useEffect} from 'react';
import axios from 'axios'
import axiosWithAuth from '../../../utils/axiosWithAuth';

const ArticleCard = ({articles}) => {
    console.log('articles', articles)
    // const id = articles.match.params.id;

    const [likes, setLikes] = useState(0);
    const [approved, setApproved] = useState(false);
    const [result, setResult] = useState([]);
    

    const approvedStory = e => {
        e.preventDefault();
        axiosWithAuth()
        .post(`https://refugee-stories-api19.herokuapp.com/posts/approve/${articles._id}`)
        .then(res => {
            console.log("Res ...", res)
            setResult(res.data)
        })
        .catch(err => console.log(err))
    }

    
    
    const deleteStories = id => {
        axiosWithAuth()
        .delete(`https://refugee-stories-api19.herokuapp.com/posts/${id}`)
        const removeStories = result.filter(item => item.id !== id)
        setResult(...removeStories)
    }

    return (
        <article>
            <div className="container">
                <header className="flex-row">
                    <div>
                        <h1 className="article-title">{articles.title}</h1>
                        <h2 className="article-author">{articles.author.name}</h2>
                    </div>

                    <div>
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-twitter-square"></i>
                        <i className="fas fa-link"></i>
                        <button>Back</button>
                    </div>
                </header>

                <main>
                    <img src='https://pbs.twimg.com/media/DvUzKCSWwAA3FbS.jpg' className="article-img" alt="Article Img" />

                    <div className="article-content">
                        <p>{articles.body}</p> 
                    </div>
                </main>

                <footer className="flex-row">
                    <div>
                        <button onClick={approvedStory}>Approve</button>
                        <button onClick={deleteStories}>Delete</button>
                    </div>
                
                    <div className="article-likes flex-row">
                        <i onClick={() => {
                            setLikes(likes + 1)
                        }} className="far fa-heart"></i>
                        <p>
                            <span className="likes">{likes}</span> Likes
                        </p>
                    </div>
                </footer>
            </div>
        </article>
    )
}

export default ArticleCard;