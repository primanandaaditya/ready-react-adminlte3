import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Satu from "./Satu";
import Dua from "./Dua";
import Preloader from "./component/Preloader";
import Navbar from "./component/Navbar";
import MainSidebar from "./component/MainSidebar";


ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route exact path="/">
                  <App/>
              </Route>
              <Route path="/satu">
                  <Satu/>
              </Route>
              <Route path="/dua">
                  <Dua/>
              </Route>
          </Switch>

      </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
