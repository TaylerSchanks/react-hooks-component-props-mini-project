import React from 'react'
import Article from './Article'

function ArticleList({ posts }) {
    console.log(posts)
    const articlePosts = posts.map((post) => (
        <Article kay={post.id} title={post.title} date={post.date} preview={post.preview} />
    ))
    return (
        <main>
            {articlePosts}
        </main>
    )
}

export default ArticleList