import React from 'react'
import { render, fireEvent, waitForElement, waitForDomChange } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'

import Search from './search'
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
const mockStore = configureStore([thunk]);

const getRenderedComponent = async () => {
    const store = mockStore({
        searchReducer: {
            user: '',
            repo: ''
        }
    });

    const component = render(
        <Provider store={store}>
            <Search />
        </Provider>
    )
    return await waitForElement(() => component);
}


test('render component', async () => {
    const c = await getRenderedComponent();
    expect(c.container).toBeInTheDocument();
})

test('search button disabled', async () => {
    const c = await getRenderedComponent();
    const input = c.getByRole('textbox');
    const button = c.getByRole('button');

    fireEvent.change(input, { target: { value: 'not/valid/input' } });
    expect(button).toHaveAttribute('disabled');
})

test('search button enabled', async () => {
    const c = await getRenderedComponent();
    const input = c.getByRole('textbox');
    const button = c.getByRole('button');

    fireEvent.change(input, { target: { value: 'valid/input' } });
    expect(button).not.toHaveAttribute('disabled');
})