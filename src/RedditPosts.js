import React, { useEffect, useState } from "react";
import SmallPost from "./SmallPost";

function RedditPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => getPosts("reddit.com/r/MechanicalKeyboards/.json"));

  return <SmallPost />;
}

async function getPosts(url) {
  let response = await fetch(url);
  console.log(response);
}

export default RedditPosts;
