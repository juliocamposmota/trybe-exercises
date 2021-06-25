import { fireEvent, render } from '@testing-library/react';
import App from './App';

test('if renders app component', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/app component/i);
  expect(linkElement).toBeInTheDocument();
});

test('if renders an input email', () => {
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

test('if renders 3 buttons', () => {
  const { getAllByRole } = render(<App />);
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(3);
});

test('if renders a send button', () => {
  const { getByTestId } = render(<App />);
  const buttonSend = getByTestId('send-button');
  expect(buttonSend.value).toBe('Enviar');
});

test('if renders a back button', () => {
  const { getByTestId } = render(<App />);
  const buttonBack = getByTestId('back-button');
  expect(buttonBack.innerHTML).toBe('Voltar');
});

test('if renders a clear button', () => {
  const { getByTestId } = render(<App />);
  const buttonClear = getByTestId('clear-button');
  expect(buttonClear.innerHTML).toBe('Apagar');
});

test('if email button or field are working', () => {
  const { getByTestId, getByLabelText } = render(<App />);
  const EMAIL_USER = 'nomedoemail@empresaprovedora.com';

  const textEmail = getByTestId('saved-email');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).not.toHaveTextContent('Saved');
  
  const buttonSend = getByTestId('send-button');
  const inputEmail = getByLabelText('Email');
  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(buttonSend);
  expect(textEmail).toHaveTextContent('Saved');
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Saved ${EMAIL_USER}`);
});
