import React, { useState, useEffect } from "react";
import axios from "axios";

const ArticleCard = ({ articles }) => {
    // const id = articles.match.params.id;

    const [likes, setLikes] = useState(0);
    const [approved, setApproved] = useState(false);
    const [result, setResult] = useState([]);

    useEffect(() => {
        axios
            .get(`https://refugee-stories-api19.herokuapp.com/posts/${articles.id}`)
            .then(res => {
                setResult(res.data);
                return axios.get(`https://refugee-stories-api19.herokuapp.com/posts/liked${articles.id}`);
            })
            .then(res => {
                setLikes(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    // const deleteStories = id => {
    //     const removeStories = result.filter(item => item.id !== id)
    //     setResult(...removeStories)
    // }

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
                    <img src="https://pbs.twimg.com/media/DvUzKCSWwAA3FbS.jpg" className="article-img" alt="Article Img" />

                    <div className="article-content">
                        <p>{articles.body}</p>
                    </div>
                </main>

                <footer className="flex-row">
                    <div>
                        <button
                            onClick={() => {
                                setResult(result.id);
                            }}
                        >
                            Approve
                        </button>
                        <button>Delete</button>
                    </div>

                    <div className="article-likes flex-row">
                        <i
                            onClick={() => {
                                setLikes(likes + 1);
                            }}
                            class="far fa-heart"
                        ></i>
                        <p>
                            <span className="likes">{likes}</span> Likes
                        </p>
                    </div>
                </footer>
            </div>
        </article>
    );
};

export default ArticleCard;
