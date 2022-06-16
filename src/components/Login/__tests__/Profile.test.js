import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../../utils/testing';
import Profile from '../Profile';
import '@testing-library/jest-dom';
import * as selectAuth from '../../../selector/auth/selectAuth';
import authServices from '../../../services/auth';

jest.mock('../../../selector/auth/selectAuth');
jest.mock('../../../services/auth');
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('Profile', () => {
  it('renders signed user email', () => {
    selectAuth.selectUser.mockReturnValue({ email: 'test@email.com' });

    render(<Profile />);

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

  it('calls onLogout on logout button click', () => {
    selectAuth.selectUser.mockReturnValue({ email: 'test@email.com' });
    authServices.logout.mockReturnValue();

    render(<Profile />);

    const buttonLogout = screen.getByRole('button', { name: /logout/i });
    fireEvent.click(buttonLogout);

    expect(authServices.logout).toHaveBeenCalled();
  });

  it('calls onShare on share button click', () => {
    selectAuth.selectUser.mockReturnValue({ email: 'test@email.com' });

    render(<Profile />);

    const buttonShare = screen.getByRole('button', {
      name: /share a movie/i,
    });
    fireEvent.click(buttonShare);
  });
});
