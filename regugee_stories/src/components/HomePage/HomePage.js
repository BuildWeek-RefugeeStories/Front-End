import React, { useState } from "react";
import HomeCard from "../HomePage/HomeCards";
import SubmitStory from "../Story/SubmitStory";

const HomePage = props => {
    console.log("props value", props);

    return (
        <div>
            {/* {props.data.map(card => {
               return <HomeCard card={card}/>
           })} */}
            <HomeCard />
        </div>
    );
};

export default HomePage;
