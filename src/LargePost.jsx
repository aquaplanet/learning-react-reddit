import React from "react";

function LargePost(props) {
    console.log(props)
    return (
        <div>
            <h1>{props.header}</h1>
            <p>{props.text}</p>
            <img style={{float: "left"}} src={props.image} alt={"Image"}/>
        </div>
    )
}

export default LargePost;
