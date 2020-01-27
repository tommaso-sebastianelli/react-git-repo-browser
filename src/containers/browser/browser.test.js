import React from 'react'
import { render, waitForElement, toBeInTheDOM, waitForDomChange } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'

import Browser from '../browser/browser'
import thunk from 'redux-thunk';
import { searchRepo } from '../../redux/actions';
import configureStore from 'redux-mock-store';
const mockStore = configureStore([thunk]);

const store = mockStore({
    searchReducer: {
        loading: false,
        commits: []
    },
    commitReducer: {
        selectedCommitId: ''
    }
});

const getRenderedComponent = async (store) => {
    const component = render(
        <Provider store={store}>
            <Browser />
        </Provider>
    )
    return await waitForElement(() => component);
}


test('render component', async () => {
    const c = await getRenderedComponent(store);
    expect(c.container).toBeInTheDocument();
    expect(c.container.querySelector('.loading-container')).not.toBeInTheDOM();
})

test('show loading   component', async () => {
    const store = mockStore({
        searchReducer: {
            loading: true,
            commits: []
        },
        commitReducer: {
            selectedCommitId: ''
        }
    });

    const c = await getRenderedComponent(store);
    expect(c.container.querySelector('.loading-container')).toBeInTheDOM();
})