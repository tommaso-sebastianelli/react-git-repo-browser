import React from 'react'
import { Provider } from 'react-redux'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CommitDrawer from './commit-drawer'
import { listCommits } from '../../../api.mock';
import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';
const mockStore = configureStore([thunk]);

const getRenderedComponent = async () => {
    const commitsData = await listCommits().toPromise();
    const store = mockStore({
        searchReducer: {
            commits: Array.from(commitsData),
            user: 'dummyUser',
            repo: 'dummyRepo'
        },
        commitReducer: {
            selectedCommitId: '6dcb09b5b57875f334f61aebed695e2e4193db8a'
        },
    });

    const component = render(
        <Provider store={store}>
            <CommitDrawer />
        </Provider>
    )
    return component;
}


test('render component', async () => {
    const c = await getRenderedComponent();

    expect(c.container).toBeInTheDocument();
})