import React from 'react'
import { Provider } from 'react-redux'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CommitDetails from './commit-details'
import { getCommit } from '../../../api.mock';
import thunk from 'redux-thunk';
import {
    BrowserRouter as Router,
} from "react-router-dom";

import configureStore from 'redux-mock-store';
const mockStore = configureStore([thunk]);

const getRenderedComponent = async () => {
    const commitData = await getCommit().toPromise();
    const store = mockStore({
        commitReducer: {
            data: commitData
        },
    });

    const component = render(
        <Provider store={store}>
            <Router>
                <CommitDetails />
            </Router>
        </Provider>
    )
    return component;
}


test('render component', async () => {
    const c = await getRenderedComponent();

    expect(c.container).toBeInTheDocument();
})