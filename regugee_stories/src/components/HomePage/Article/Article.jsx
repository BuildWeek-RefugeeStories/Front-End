import React, { useState , useEffect} from "react";
import axios from 'axios';
import "../Article/Article.css";
import ArticleCard from "./ArticleCard";

const Article = props => {
    const [articles , setArticles] = useState();

useEffect(() => {

    // const id = props.match.params.id;
    getArticles();
}, [])

const getArticles = () => {
    console.log('PROPS', props)
    axios
    .get(`https://refugee-stories-api19.herokuapp.com/posts/${props.match.params.id}`)
    .then(res => {
        console.log("article res", res)
        setArticles(res.data)
    })
    .catch(err => {
        console.log('Cannot retrieve Stories....' , err)
    })
}

if(!articles) {
    return <div>Loading Article...</div>
}

    // const {title, author, body, createdAt, likes, id} = articles;
    return (
        <div>
            {/* {articles.map(data => {
                return <ArticleCard key={data.id} {...data} />
            })} */}
            <ArticleCard articles={articles}/>
        </div>
    );
};

export default Article;
