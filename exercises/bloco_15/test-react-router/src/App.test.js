import React from 'react';
import { fireEvent } from '@testing-library/dom';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';

describe('Testa toda a aplicação', () => {
  it('if render App component', () => {
    const { getByText } = renderWithRouter(<App />);
    const homeText = getByText(/página home/i);
    expect(homeText).toBeInTheDocument();
    
  });
  
  it('if render About component after click on his link', () => {
    const { getByText, history } = renderWithRouter(<App />);
    const about = getByText('Sobre');
    
    fireEvent.click(about);
    const pathname = history.location.pathname;
    const aboutText = getByText(/página sobre/i);
    expect(pathname).toBe('/about');
    expect(aboutText).toBeInTheDocument();
  });

  it('if render NoMatch when there is no route for url adress', () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push('/pagina-sem-rota');
    const noMatch = getByText(/página não encontrada/i);
    expect(noMatch).toBeInTheDocument();
  });

  it('if render only About component', () => {
    const { getByText } = renderWithRouter(<About />);
    const aboutOnly = getByText(/página sobre/i);
    expect(aboutOnly).toBeInTheDocument();
  });
});
