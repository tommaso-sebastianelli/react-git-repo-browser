import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import store from './redux/store'
import ErrorHandler from './components/errorHandler/error-handler';

import './index.css';
import './spacing.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
        <ErrorHandler></ErrorHandler>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
