import React from 'react';
import { render } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('if the component recive a valid email', () => {
  const EMAIL_USER = 'emailname@provider.com';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('if the component recive a invalid email', () => {
  const EMAIL_USER = 'emailnameprovider';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});
