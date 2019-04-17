import React from "react";
import "./App.css";
import Sort from "./Components/Sort"
import Top from "./Components/Top";
import Body from "./Components/Body";
import Bottom from "./Components/Bottom";
import PotterStudentFullInfo from "./Components/Potter/PotterStudentFullInfo";
import CatsPage from "./Components/Cat/CatsPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterReducer  from './modules/counter/reducer'
const store = createStore( counterReducer,0)


function App() {
  
  return (
    <Provider store={store}>
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
    </Provider>
  );
 
}

export default App;
