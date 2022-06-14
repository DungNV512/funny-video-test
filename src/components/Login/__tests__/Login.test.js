import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Login } from '../Login';
import '@testing-library/jest-dom'

describe('Login', () => {
  it('renders default state', () => {
    render(<Login />);

    const loginButton = screen.getByRole('button');
    expect(loginButton).toBeInTheDocument();
  });

  it('renders signed state', () => {
    render(<Login state={{ user: { email: 'test@email.com' } }} />);

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
  });

  it('renders error state', () => {
    render(<Login state={{ status: 'rejected', error: 'invalid password' }} />);

    const errorText = screen.getByText('Error:');
    expect(errorText).toBeInTheDocument();
    const errorMessageText = screen.getByText('invalid password');
    expect(errorMessageText).toBeInTheDocument();
  });

  it('calls onLogout on logout button click', () => {
    const onLogoutSpy = jest.fn();
    render(<Login state={{ user: { email: 'test@email.com' } }} onLogout={onLogoutSpy} />);

    const buttonLogout = screen.getByRole('button', {name: /logout/i})
    fireEvent.click(buttonLogout)

    expect(onLogoutSpy).toHaveBeenCalled()
  });

  it('calls onShare on share button click', () => {
    const onShareSpy = jest.fn()
    render(<Login state={{ user: { email: 'test@email.com' } }} onShare={onShareSpy}/>)

    const buttonShare = screen.getByRole('button', {
      name: /share a movie/i,
    });
    fireEvent.click(buttonShare)

    expect(onShareSpy).toHaveBeenCalled()
  })
});
