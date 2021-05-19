import React from "react";
import RedditPosts from "./RedditPosts";
import SearchBar from "./SearchBar";
import "./style.css";
import LargePost from "./LargePost";
import Redditservice from "./Redditservice";

export default function App() {
    return (
        <div id="react">
            <header>
                <h1>Röddit</h1>
                <SearchBar/>
            </header>

            <main>
                <h1>Posts from r/MechanicalKeyboards!</h1>
                <Redditservice subreddit={"MechanicalKeyboards"}>
                    <RedditPosts/>
                    <LargePost text={"Lorem ipsum"} header={"Anders är bäst"}
                               image={"https://placekitten.com/200/300"}/>
                </Redditservice>
            </main>


            <footer>
                <p>Detta är sidfoten</p>
            </footer>
        </div>
    );
}
