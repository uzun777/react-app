import React, { Component } from 'react';
import './App.css';
import Top from './Components/Top'
import Body from './Components/Body'
import Bottom from './Components/Bottom'

function App() {
  return(
    // <Article article={news[0]} />
    // <ArticleList article={articles[3]} />
    <div className="global">
    <Top myName="Company Name"/>
    <Body/>
    <Bottom/>
    </div>
  )
}

 export default App;
