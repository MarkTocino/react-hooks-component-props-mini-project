import React from "react";
import Header from "./Header";
import About from "./About";
import Article from "./Article";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";
console.log(blogData.posts);

function App() {
  return (
    <div className="App">
      <Header name= "Underreacted"/>
      <About about="A blog about learning React"/>
      <ArticleList>
        <Article posts={blogData.posts}/>
      </ArticleList>
    </div>
  );
}

export default App;
