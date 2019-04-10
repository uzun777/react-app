import React from "react";
import "./App.css";
import Sort from "./Components/Sort"
import Top from "./Components/Top";
import Body from "./Components/Body";
import Bottom from "./Components/Bottom";
import PotterStudentFullInfo from "./Components/Potter/PotterStudentFullInfo";
import CatsPage from "./Components/Cat/CatsPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  
  return (
Sort(["123","456"]),
    <Router>
      <div className="global">
        <Top myName="Company Name" />
    
        <switch>
          <Route path="/" exact component={Body} />

          <Route
            path="/people/:idFromUrl"
            
            render={props => (
              <PotterStudentFullInfo
                {...props}
                
              />
            )}
          />

            <Route
            path="/cats/:page/:limit"
            
            render={props => (
              <CatsPage
                {...props}
                
              />
            )}
          />


        </switch>
        {/*<Body>*/}
        <Bottom />
      </div>
    </Router>
  
  );
}

export default App;
