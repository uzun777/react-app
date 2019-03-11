import React from 'react'
import Article from './Article'

export default function ArticleList(props) {
    const articleElements = props.article.map(a =>
        <li key={a.id}><Article article={a}/></li>)

        return(
            {articleElements}
        )
}