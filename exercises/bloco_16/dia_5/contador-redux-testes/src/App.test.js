import React from 'react'
import { cleanup, fireEvent } from '@testing-library/react';
import App from './App';
import renderWithRedux from './renderWithRedux';

describe('testing clicks', () => {
  beforeEach(cleanup);

  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();

    fireEvent.click(buttonAdicionar);
    expect(queryByText('1')).toBeInTheDocument();
  });

  test('the page should has a button and a text 10', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('10')).toBeInTheDocument();

    for (let i = 1; i <= 10; i += 1) {
      fireEvent.click(buttonAdicionar);
      expect(queryByText(`${10 + i}`)).toBeInTheDocument();
    }

    expect(queryByText('20')).toBeInTheDocument();
  });
});
