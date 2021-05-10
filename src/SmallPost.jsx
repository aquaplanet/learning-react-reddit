import React from "react";
import "./SmallPost.css"

let SmallPost = function () {
  return (
      <div className="smallpost">
        <img src="https://placekitten.com/50/80" alt="Text till bilden"/>
        <h2>Rubrik</h2>
        <h3>Undertext</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>);
};

export default SmallPost
