import React from 'react'
import { Provider } from 'react-redux'

import { render, fireEvent, waitForElement, waitForDomChange } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CommitDrawer from './commit-drawer'
import { listCommits } from '../../../api.mock';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router';


import configureStore from 'redux-mock-store';
const mockStore = configureStore([thunk]);

const getRenderedComponent = async () => {
    const res = await listCommits().toPromise();
    const store = mockStore({
        searchReducer: {
            commits: res.data,
            user: 'dummyUser',
            repo: 'dummyRepo'
        },
        commitReducer: {
            selectedCommitId: null
        },
    });

    const component = render(
        <Provider store={store}>
            <CommitDrawer />
        </Provider>
    )
    return await waitForElement(() => component);
}


test('render component', async () => {
    const c = await getRenderedComponent();

    expect(c.container).toBeInTheDocument();
})

test('ui shows selected commit', async () => {
    const c = await getRenderedComponent();


    const element = c.getByText('Commit for testing selection');
    expect(element.parentElement.parentElement.classList).not.toContain('selected');
    fireEvent.click(element);
    waitForDomChange().then(() => {
        // selected grey item
        expect(element.parentElement.parentElement.classList).toContain('selected');
    });
})