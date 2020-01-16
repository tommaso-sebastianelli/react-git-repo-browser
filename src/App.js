import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Start from './start/start';
import Browser from './browser/browser';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import history from './history';

class App extends React.Component {

  render() {
    // if(true){
    //   return <div className="loading"><CircularProgress /></div>
    // }
    return (
      <CssBaseline>
        <div>
          <Router history={history}>
            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/start">
                <Start />
              </Route>
              <Route path="/browser">
                <Browser />
              </Route>
              <Route path="*">
                <Start />
              </Route>
            </Switch>
          </Router>
        </div>
      </CssBaseline>
    );
  }
}

export default App;
