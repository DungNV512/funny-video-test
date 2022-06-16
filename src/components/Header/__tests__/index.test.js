import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../../utils/testing';
import Header from '../index';
import '@testing-library/jest-dom';

describe('Header', () => {
  it('renders a logo', () => {
    render(<Header />);

    const logoEl = screen.getByRole('img');
    expect(logoEl).toBeInTheDocument();
  });

  it('renders default login form', () => {
    render(<Header />)

    const loginButton = screen.getByRole('button', {name: 'Login/Register'})
    expect(loginButton).toBeInTheDocument()
  })

  it('renders signed state',() => {
    render(<Header/>)

    const loggedInText = screen.getByText('Welcome');
    expect(loggedInText).toBeInTheDocument();
    const emailAddressText = screen.getByText('test@email.com');
    expect(emailAddressText).toBeInTheDocument();

    const buttonShareMovie = screen.getByRole('button', {
      name: /share a movie/i,
    });
    expect(buttonShareMovie).toBeInTheDocument();
    const buttonLogout = screen.getByRole('button', { name: /logout/i });
    expect(buttonLogout).toBeInTheDocument();
  })
});
