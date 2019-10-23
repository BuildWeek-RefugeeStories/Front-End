import React from "react";
import "../Article/Article.css";

const Article = () => {
    return (
        <article>
            <div className="container">
                <header className="flex-row">
                    <div>
                        <h1 className="article-title">Where Next?</h1>
                        <h2 className="article-author">Elias G.</h2>
                    </div>

                    <div>
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-twitter-square"></i>
                        <i class="fas fa-link"></i>
                        <button>Back</button>
                    </div>
                </header>

                <main>
                    <img className="article-img" src="https://via.placeholder.com/150" alt="Article Image" />

                    <p className="article-img-caption">
                        If there is a caption for the image, it will go here. User can provide a brief explanation for the
                        photo. This is where the information about the image will be displayed, and maybe the source as well.
                    </p>

                    <div className="article-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure debitis dolor temporibus cupiditate
                            pariatur perspiciatis soluta ab vel tempore? Excepturi minima autem nostrum quae culpa soluta
                            facere quasi, amet suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ratione
                            amet sapiente, eaque natus repellendus similique inventore architecto cumque dolorem, illum
                            magnam placeat perferendis minima velit repellat reiciendis. Quis, necessitatibus!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure debitis dolor temporibus cupiditate
                            pariatur perspiciatis soluta ab vel tempore? Excepturi minima autem nostrum quae culpa soluta
                            facere quasi, amet suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ratione
                            amet sapiente, eaque natus repellendus similique inventore architecto cumque dolorem, illum
                            magnam placeat perferendis minima velit repellat reiciendis. Quis, necessitatibus! Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Est cupiditate omnis tenetur tempore ea. Ab omnis
                            neque voluptatum at voluptas molestias explicabo iusto accusantium! Quis accusamus fuga unde
                            harum doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laboriosam et
                            necessitatibus magni quasi distinctio, id inventore aliquid ab blanditiis in doloremque, iste
                            impedit atque totam quam iusto voluptatibus molestiae.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure debitis dolor temporibus cupiditate
                            pariatur perspiciatis soluta ab vel tempore? Excepturi minima autem nostrum quae culpa soluta
                            facere quasi, amet suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ratione
                            amet sapiente, eaque natus repellendus similique inventore architecto cumque dolorem, illum
                            magnam placeat perferendis minima velit repellat reiciendis. Quis, necessitatibus! Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Ut eos omnis fugit totam excepturi amet dolorum?
                            Mollitia est recusandae unde, doloribus debitis repudiandae, at soluta, corrupti eum ex error et.
                        </p>
                    </div>
                </main>

                <footer className="flex-row">
                    <button>Back</button>
                    <div className="article-likes flex-row">
                        <i class="far fa-heart"></i>
                        <p>
                            <span className="likes">28</span> Likes
                        </p>
                    </div>
                </footer>
            </div>
        </article>
    );
};

export default Article;
