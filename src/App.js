import React, {useEffect, useState} from "react";
import RedditPosts from "./RedditPosts";
import SearchBar from "./SearchBar";
import "./style.css";
import LargePost from "./LargePost";

const fetchPostsFromReddit = (subreddit) => {
    function houseCleaning(jsonPost) {
        return {
            header: jsonPost.data.title,
            text: "This is some text that needs to be replaced by whatever is on Reddit",
            image: jsonPost.data.thumbnail,
        }

    }

    return fetch(`https://www.reddit.com/r/${subreddit}/.json`)
        .then(value => value.json())
        .then(value => value.data.children.map(houseCleaning))
}

export default function App() {
    const [subreddit, setSubreddit] = useState("MechanicalKeyboards")
    const [posts, setPosts] = useState([])
    const [article, setArticle] = useState({})

    useEffect(() => {
        fetchPostsFromReddit(subreddit)
            .then(posts => {
                setArticle({...posts[0]});
                setPosts(posts);

            });
    }, [subreddit]);

    return (
        <div id="react">
            <header>
                <h1>Röddit</h1>
                <SearchBar/>
            </header>

            <main>
                <h1>Posts from r/MechanicalKeyboards!</h1>
                <RedditPosts posts={posts}/>
                <hr/>
                <LargePost header={article.header} text={article.text} image={article.image}/>
            </main>

            <footer>
                <p>Detta är sidfoten</p>
            </footer>
        </div>
    );
}
