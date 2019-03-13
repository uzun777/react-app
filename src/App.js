import React, { Component } from 'react';
import './App.css';
import Top from './Components/Top'
import Body from './Components/Body'

function App() {
  return(
    // <Article article={news[0]} />
    // <ArticleList article={articles[3]} />
    <div>
    <Top  myName="Company Name"/>
    <Body/>
    </div>
  )
}

 export default App;
