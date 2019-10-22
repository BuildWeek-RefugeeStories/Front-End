import React, { useState } from "react";
import SubmitStory from "../Story/SubmitStory";

const HomePage = props => {
    // const { title, author, anon, text } = props.data;
    const [title] = useState(props.data);
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default HomePage;
