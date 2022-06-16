/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../../utils/testing';
import Header from '../index';
import '@testing-library/jest-dom';
import * as selectAuth from '../../../selector/auth/selectAuth';

jest.mock('../../../selector/auth/selectAuth');

describe('Header', () => {
  it('renders a logo', () => {
    render(<Header />);

    const logoEl = screen.getByRole('img');
    expect(logoEl).toBeInTheDocument();
  });

  it('renders default login form', () => {
    render(<Header />);

    const loginButton = screen.getByRole('button', { name: 'Login/Register' });
    expect(loginButton).toBeInTheDocument();
  });

  it('renders signed state', () => {
    selectAuth.selectUser.mockReturnValue({ email: 'test@email.com' });
    selectAuth.selectIsAuth.mockReturnValue(true)

    render(<Header />);
    const logoutButton = screen.getByRole('button', { name: 'Logout' })
    expect(logoutButton).toBeInTheDocument()
  })
});
