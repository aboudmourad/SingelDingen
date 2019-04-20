import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import ValidRoutes from "./ValidRoutes";
import Page404 from "../Pages/NotFound/Page404"

class App extends Component {
  render() {
    return (
      <div >
        <Router>
                <div>
                    <Switch>
                      <Route exact path="(/|/About|/PostPages|/Store)" component={ValidRoutes}/>
                      <Route exact path="/*" component={Page404}/>
                    </Switch>
                </div>
            </Router>
      </div>
    );
  }
}

export default App;
