import React, { useState, useEffect } from 'react';
import './SubmitStory.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth'

const SubmitStory = props => {
    const [data, setData] = useState(
        {
            title: "",
            anonymous: false,
            body: "",
        }
    );

const postStories = () => {
        console.log('data value...', data)
        return axiosWithAuth()
        .post('/posts/new', data)
        .then(res => {
            console.log('Res Value', res.data)
            setData(res.data)
        })
        .catch(err => console.log(err.response))
    }

    const handleChange = e => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
        console.log("SS input Value...", data);
    };

    const onSumbit = e => {
        e.preventDefault();
        setData({ ...data });
        console.log("Saved input Value...", data);
        postStories()
        .then(res => {
            props.history.push("/home");
        })
        .catch(err => {
            console.log(err)
        })
    };

    return (
        <div className="SubmitStory">
            <form onSubmit={onSumbit}>
                <h1 className="submit-form">Submit a Story</h1>
                <div className="ss-Top-Section">
                    <div className="top-Left">
                        <span>Title</span>
                        <input onChange={handleChange} name="title"></input>
                        <span>Author</span>
                        <input onChange={handleChange} name="author"></input>
                        <div id="anonymous">
                            <input type="checkbox"></input>
                            <p>I prefer to stay anonymous</p>
                        </div>{" "}
                        {/* anonymous end */}
                    </div>{" "}
                    {/* top-Left end */}
                    <div className="top-Right">
                        <h4>Writing Resources</h4>
                        <p>
                            For translation assistance, refer to the “Google Translate” link below. Refer to the “Writing
                            Guide” link for tips on conveying your ideas.
                        </p>
                        <div className="top-Right-Links">
                            <a href="#">Google Translate</a>
                            <a href="#">Writing Guide</a>
                        </div>
                    </div>{" "}
                    {/* top-Right end */}
                </div>{" "}
                {/* ss-Top-Section end */}
                <div id="ss-Bottom-Section">
                    <div className="ss-Bottom-Section">
                        <div className="ss-Bottom-left">
                            <textarea placeholder="Type Story Here" onChange={handleChange} name="body"></textarea>
                        </div>
                        <div className="ss-Bottom-Right">
                        <div className="addImg">
                            <h3>Upload Image</h3>
                            <i className="fas fa-cloud-download-alt"></i>
                            <p>
                                Drag and drop <br /> or
                            </p>
                            <button>UPLOAD</button>
                        </div>
                    </div>{" "}
                    </div>
                    
                    {/* ss-Bottom-Section end */}
                    <div className="submit-button">
                        <button>PREVIEW</button>
                        <button>SUBMIT</button>
                </div> {/* submit-button end */}
            </div> {/* #ss-Bottom-Section end */}
            </form> {/* submit-form end */}
            <div className='home-text-link'>
                <Link to='/home'>Return Home</Link>
            </div>
        </div> /* SubmitStory end */
    );
};

export default SubmitStory;
