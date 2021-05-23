import React from "react";
import SmallPost from "./SmallPost";

function RedditPosts(props) {
  return (
      <section>
        {props.posts.map((post, index) => <SmallPost header={post.header} text={post.text} key={index}/>)}
      </section>
  );
}

export default RedditPosts;
