import React, { Component } from 'react';
import './App.css';
import articles from './fixtures'
import ArticleList from './Components/ArticleList'
import Article from './Components/Article'
import Top from './Components/Top'
import Body from './Components/Body'

function App() {
  return(
    // <Article article={news[0]} />
    // <ArticleList article={articles[3]} />
    <div>
    <Top Name="Company Name">></Top>
    <Body/>
    </div>
  )
}

 export default App;
