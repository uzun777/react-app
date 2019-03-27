import React from "react";
import "./App.css";
import Top from "./Components/Top";
import Body from "./Components/Body";
import Bottom from "./Components/Bottom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="global">
        <Top myName="Company Name" />
        <switch>
        <Route path="/TEST" exact component={Body} />
        <Route path="/TEST/Hannah Abbott" exact component={Body} />
        </switch>
        {/*<Body>*/}
        <Bottom />
      </div>
    </Router>
  );
}

export default App;
