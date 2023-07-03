import React from "react";
import Article from "./Article"
import blogData from "../data/blog";
function ArticleList() {
    const articlePosts = blogData.posts.map((props) => {
        return <Article key={props.title} id={props.id} title={props.title} date={props.date} preview={props.preview} minutes={props.minutes} />
    })
    return (
        <main>
            {articlePosts}
        </main>
    )
}
export default ArticleList;