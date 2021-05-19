import React from "react";
import "./SmallPost.css"

let SmallPost = function (props) {
    return (
        <div className="smallpost">
            <img src="https://placekitten.com/50/80" alt="Text till bilden"/>
            <h2>{props.header}</h2>
            <h3>Subheading</h3>
            <p>{props.text}</p>
        </div>);
};

export default SmallPost
