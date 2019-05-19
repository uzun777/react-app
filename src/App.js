import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./App.css";
import Top from "./Components/Top";
import Body from "./Components/Body";
import Bottom from "./Components/Bottom";
import PotterStudentFullInfo from "./Components/Potter/PotterStudentFullInfo";
import CatsPage from "./Components/Cat/CatsPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import CreateStore from "./configureStore";
import { Counter } from "./Components/Counter/Counter";
import { PersistGate } from "redux-persist/integration/react";
import {PeopleList} from "./Components";
import {MyForm} from './Components'

const { store, persistor } = CreateStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className="global">
            <Top myName="Company Name" />

            <switch>
              <Route exact path="/" component={Body}>
                {/* <Counter /> */}
              </Route>

              <Route
                path="/people/:idFromUrl"
                render={props => <PotterStudentFullInfo {...props} />}
              />
              <Route
                path="/form/"
                render={props => <MyForm {...props} />}
                // render={props => <PeopleList {...props} />}
              />

              <Route
                path="/cats/:page"
                render={props => <CatsPage {...props} />}
              />
            </switch>
            {/*<Body>*/}
            <Bottom />
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
