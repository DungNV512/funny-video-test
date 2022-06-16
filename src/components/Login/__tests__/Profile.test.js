import React from 'react';
import { fireEvent, screen } from '@testing-library/react'
import { render } from '../../../utils/testing';
import Profile from '../Profile';
import '@testing-library/jest-dom'

describe('Profile', () => {
  it('renders signed user email', () => {
    render(<Profile state={{ user: { email: 'test@email.com' } }} />);

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
    const onLogoutSpy = jest.fn();
    render(<Profile state={{ user: { email: 'test@email.com' } }} onLogout={onLogoutSpy} />);

    const buttonLogout = screen.getByRole('button', {name: /logout/i})
    fireEvent.click(buttonLogout)

    expect(onLogoutSpy).toHaveBeenCalled()
  });

  it('calls onShare on share button click', () => {
    const onShareSpy = jest.fn()
    render(<Profile state={{ user: { email: 'test@email.com' } }} onShare={onShareSpy}/>)

    const buttonShare = screen.getByRole('button', {
      name: /share a movie/i,
    });
    fireEvent.click(buttonShare)

    expect(onShareSpy).toHaveBeenCalled()
  })
});
