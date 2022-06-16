import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../index';
import { render } from '../../../utils/testing';
import * as selectAuth from '../../../selector/auth/selectAuth';
import authServices from '../../../services/auth';

jest.mock('../../../selector/auth/selectAuth');
jest.mock('../../../services/auth');
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('Login', () => {
  it('renders default state', () => {
    render(<Login />);

    const loginButton = screen.getByRole('button');
    expect(loginButton).toBeInTheDocument();
  });

  it('renders signed state', () => {
    selectAuth.selectIsAuth.mockReturnValue(true);
    selectAuth.selectUser.mockReturnValue({ email: 'test@email.com' });

    render(<Login />);

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

  // it('renders error state', () => {
  //   render(<Login state={{ status: 'rejected', error: 'invalid password' }} />);

  //   const errorText = screen.getByText('Error:');
  //   expect(errorText).toBeInTheDocument();
  //   const errorMessageText = screen.getByText('invalid password');
  //   expect(errorMessageText).toBeInTheDocument();
  // });

  it('calls onLogout on logout button click', () => {
    selectAuth.selectIsAuth.mockReturnValue(true);
    selectAuth.selectUser.mockReturnValue({ email: 'test@email.com' });

    authServices.logout.mockReturnValue();

    render(<Login />);

    const buttonLogout = screen.getByRole('button', { name: /logout/i });
    fireEvent.click(buttonLogout);

    expect(authServices.logout).toHaveBeenCalled();
  });

  it('calls onShare on share button click', () => {
    selectAuth.selectIsAuth.mockReturnValue(true);
    selectAuth.selectUser.mockReturnValue({ email: 'test@email.com' });

    render(<Login />);

    const buttonShare = screen.getByRole('button', {
      name: /share a movie/i,
    });
    fireEvent.click(buttonShare);
  });
});
