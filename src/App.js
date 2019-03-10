import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { green } from 'ansi-colors';
import {sayHi} from './Funcs.js';

class App extends Component {
  render() {
    let Yurii = {
      name:"Yurii",
      age:22,
      money:0}
    let i = 5;

    var style = {
      color:"green",
      fontsize:30
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={style}>
          Hello {i==5 ? "True":"False"} {sayHi({Yurii})}</p>
          <p>{Yurii.money=2}</p>
          {Yurii.money}
        </header>
      </div>
    );
  }
}

export default App;
