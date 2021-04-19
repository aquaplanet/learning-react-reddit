import React, { useEffect, useState } from "react";

function RedditPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => getPosts("reddit.com/r/MechanicalKeyboards/.json"));

  return <p>Reddit posts!!</p>;
}

async function getPosts(url) {
  let reponse = await fetch(url);
  console.log(response);
}

export default RedditPosts;
