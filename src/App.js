import React from "react";
import "./App.css";
import Top from "./Components/Top";
import Body from "./Components/Body";
import Bottom from "./Components/Bottom";
import PotterStudentFullInfo from "./Components/Potter/PotterStudentFullInfo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="global">
        <Top myName="Company Name" />
        <switch>
          <Route path="/" exact component={Body} />

          <Route
            path="/people/id=:idFromUrl"
            
            render={props => (
              <PotterStudentFullInfo
                {...props}
                id="5a0fa60aae5bc100213c2331"
                data={[
                  {
                    _id: "5a0fa60aae5bc100213c2331",
                    name: "Bathilda Bagshot",
                    house: "1",
                    school: "2",
                    role: "Author, A History Of Magic"
                  }
                ]}
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
