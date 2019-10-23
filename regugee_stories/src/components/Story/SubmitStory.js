import React from "react";
import "./SubmitStory.css";

const SubmitStory = () => {
    return (
        <div className="container">
            <form>
                <h1>Submit your Story</h1>
                <div className="top flex-row">
                    <div className="info flex-col">
                        <label className="flex-col">
                            Title
                            <input id="title" name="title" type="text" placeholder="Title" />
                        </label>
                        <label className="flex-col">
                            Author
                            <input id="author" name="author" type="text" placeholder="Author" />
                        </label>
                        <label>
                            <input id="anon" name="anon" type="checkbox" />{" "}
                            <span className="anon-label">I prefer to stay anonymous</span>
                        </label>
                    </div>

                    <div className="resources">
                        <h4>Writing Resources</h4>
                        <p>
                            For translation assistance, refer to the “Google Translate” link below. Refer to the “Writing
                            Guide” link for tips on conveying your ideas.
                        </p>
                        <div className="links">
                            <a href="#">Google Translate</a>
                            <a href="#">Writing Guide</a>
                        </div>
                    </div>
                </div>

                <div className="bottom flex-row">
                    <textarea id="text" name="text" placeholder="Your story here..."></textarea>
                    <div className="addImg">
                        <h3>Upload Image</h3>
                        <i className="fas fa-cloud-download-alt"></i>
                        <p>
                            Drag and drop <br /> or
                        </p>
                        <button>UPLOAD</button>
                    </div>
                </div>

                <div className="form-buttons">
                    <button>PREVIEW</button>
                    <button>SUBMIT</button>
                </div>
            </form>
        </div>
    );
};

export default SubmitStory;
