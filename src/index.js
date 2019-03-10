import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();

//ReactDOM.render(<h1>Hello World</h1>,document.getElementById("root"));

function tick(params) {
    let element=(
        <div>
        <h1>Hello</h1>
        <h2>Time is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(element,document.getElementById('root'))
};

setInterval(tick,1000);