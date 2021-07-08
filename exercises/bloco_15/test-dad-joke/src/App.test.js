import React from 'react'
import { fireEvent, render } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('Alterando os valores do campo e testando o valor guardado', () => {
  const { getByTestId } = render(<App />);

  const inputNome = getByTestId('input-nome');
  expect(inputNome).toHaveValue('');
  fireEvent.change(inputNome, { target: { value: 'Júlio Mota Campos' } });
  expect(inputNome).toHaveValue('Júlio Mota Campos');

  const inputEmail = getByTestId('input-email');
  expect(inputEmail).toHaveValue('');
  fireEvent.change(inputEmail, { target: { value: 'juliomotacampos@gmail.com' } });
  expect(inputEmail).toHaveValue('juliomotacampos@gmail.com');
});

it('Fetch joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  
  // jest.spyOn(global, 'fetch');
  // global.fetch.mockResolvedValue({
  //   json: jest.fn().mockResolvedValue(joke),
  // });

  // global.fetch = jest.fn(() => 
  //   Promise.resolve({
  //     json: () => Promise.resolve(joke),
  // }));

  global.fetch = jest.fn(async () => ({
    json: async () => joke,
  }))

  const { findByText } = render(<App />);

  await findByText('Whiteboards ... are remarkable.');
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    {"headers": {"Accept": "application/json"}}
  );
});
