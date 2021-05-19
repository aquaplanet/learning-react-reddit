import React from "react";
import SmallPost from "./SmallPost";

function RedditPosts(props) {
  return (
      <section>
        {props.posts.map(post => <SmallPost header={post.header} text={post.text}/>)}
      </section>
  );
}

export default RedditPosts;
