import React from "react";
import RedditPosts from "./RedditPosts";
import SearchBar from "./SearchBar";
import "./style.css";

export default function App() {
  return (
    <div id="react">
      <header>
        <h1>Röddit</h1>
        <SearchBar />
      </header>

      <main>
        <h1>Posts from r/MechanicalKeyboards!</h1>
        <RedditPosts />
      </main>

      <footer>
        <p>Detta är sidfoten</p>
      </footer>
    </div>
  );
}
