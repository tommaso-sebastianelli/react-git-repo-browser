import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Start from './containers/start/start';
import Browser from './containers/browser/browser';
import CssBaseline from '@material-ui/core/CssBaseline';
import { APP_ROUTER_BASENAME } from '.';

class App extends React.Component {

  render() {
    return (
      <CssBaseline>
        <React.StrictMode>
          <Router basename={APP_ROUTER_BASENAME}>
            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/start">
                <Start />
              </Route>
              <Route path="/browser/:user/:repo/:commit">
                <Browser commitSelected={true} />
              </Route>
              <Route path="/browser/:user/:repo">
                <Browser />
              </Route>
              <Route path="*">
                <Redirect to="/start" />
              </Route>
            </Switch>
          </Router>
        </React.StrictMode>
      </CssBaseline>
    );
  }
}

export default App;
