import React, { useState } from 'react';


const HomeCard = (props) => {
    console.log('props value', props)
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

export default HomeCard;