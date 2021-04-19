import React from "react";
import RedditPosts from "./RedditPosts";
import "./style.css";

export default function App() {
  return (
    <div id="react">
      <header>
        <h1>Anders Reddit application</h1>
        <p>
          Man skulle vilja ha ett bra webbprojekt för att läsa JSON och sådant,
          men jag kommer inte på något. Kanske att läsa Reddit-APIt och göra
          roliga saker med det men ... vänta det var faktiskt en bra idé
        </p>
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
