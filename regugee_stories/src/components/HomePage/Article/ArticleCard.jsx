import React, {useState,useEffect} from 'react';
import axios from 'axios'

const ArticleCard = ({articles}) => {

    const [likes, setLikes] = useState(0);

    useEffect(() => {

        axios
        .get(`https://refugee-stories-api19.herokuapp.com/posts/liked`)
        .then(res => {
            setLikes(res.data)
        })
        .catch(err => console.log(err))
    })

    return (
        <article>
            <div className="container">
                <header className="flex-row">
                    <div>
                        <h1 className="article-title">{articles.title}</h1>
                        <h2 className="article-author">{articles.author.name}</h2>
                    </div>

                    <div>
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-twitter-square"></i>
                        <i class="fas fa-link"></i>
                        <button>Back</button>
                    </div>
                </header>

                <main>
                    <img className="article-img" alt="Article Img" />

                    <div className="article-content">
                        <p>{articles.body}</p> 
                    </div>
                </main>

                <footer className="flex-row">
                    <button>Back</button>
                    <div className="article-likes flex-row">
                        <i onClick={() => {
                            setLikes(likes + 1)
                        }} class="far fa-heart"></i>
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