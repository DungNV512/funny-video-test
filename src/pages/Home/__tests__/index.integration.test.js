/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import React from 'react';
import { HomeModule } from '..';
import { getSharedMovies, login, vote } from '../../api';
import { MOCK_SHARED_MOVIES } from '../../constants';
import '@testing-library/jest-dom'

jest.mock('../../api');

afterEach(() => {
  jest.resetAllMocks();
});

describe('HomeModule', () => {
  test('initial login state', () => {
    getSharedMovies.mockResolvedValueOnce({ data: [] });
    render(<HomeModule />);

    // it renders empty email and password fields
    const emailField = screen.getByPlaceholderText('Email');
    expect(emailField).toHaveValue('');
    const passwordField = screen.getByPlaceholderText('Password');
    expect(passwordField).toHaveValue('');

    // it renders enabled login/register button
    const button = screen.getByRole('button', {name: 'Login/Register'});
    expect(button).not.toBeDisabled();
    expect(button).toHaveTextContent('Login/Register');
  });

  test('login successfully', async () => {
    getSharedMovies.mockResolvedValueOnce({ data: [] });
    login.mockResolvedValueOnce({
      data: { user: { email: 'test@email.com', token: '123' } },
    });

    render(<HomeModule />);

    const emailField = screen.getByPlaceholderText('Email');
    const passwordField = screen.getByPlaceholderText('Password');
    const button = screen.getByRole('button', {name: 'Login/Register'});

    // fill out and submit form
    fireEvent.change(emailField, { target: { value: 'test@email.com' } });
    fireEvent.change(passwordField, { target: { value: 'password' } });
    fireEvent.click(button);

    // it sets loading state
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent('Loading...');

    await waitFor(() => {
      // it hides form elements
      expect(button).not.toBeInTheDocument();
      expect(emailField).not.toBeInTheDocument();
      expect(passwordField).not.toBeInTheDocument();

      // it displays success text and email address
      const loggedInText = screen.getByText('Welcome');
      expect(loggedInText).toBeInTheDocument();
      const emailAddressText = screen.getByText('test@email.com');
      expect(emailAddressText).toBeInTheDocument();

      // it displays share button and logout button
      const buttonShareMovie = screen.getByRole('button', {
        name: /share a movie/i,
      });
      expect(buttonShareMovie).toBeInTheDocument();
      const buttonLogout = screen.getByRole('button', { name: /logout/i });
      expect(buttonLogout).toBeInTheDocument();
    });
  });

  test('login with an error', async () => {
    const message = 'Invalid password';
    login.mockRejectedValueOnce({ message });

    render(<HomeModule />);

    const emailField = screen.getByPlaceholderText('Email');
    const passwordField = screen.getByPlaceholderText('Password');
    const button = screen.getByRole('button');

    // fill out and submit form
    fireEvent.change(emailField, { target: { value: 'test@email.com' } });
    fireEvent.change(passwordField, { target: { value: 'password' } });
    fireEvent.click(button);

    // it sets loading state
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent('Loading...');

    await waitFor(() => {
      // it resets button
      expect(button).not.toBeDisabled();
      expect(button).toHaveTextContent('Login/Register');
    });

    const errorText = screen.getByText('Error:');
    expect(errorText).toBeInTheDocument();
    const errorMessageText = screen.getByText(message);
    expect(errorMessageText).toBeInTheDocument();
  });

  test('movies load and renders the shared movies list empty', async () => {
    getSharedMovies.mockResolvedValueOnce({ data: [] });

    render(<HomeModule />);
    expect(getSharedMovies).toHaveBeenCalledTimes(1);

    const emptyText = await waitFor(() => screen.findByText('Empty.'));
    expect(emptyText).toBeInTheDocument();
  });

  test('movies load and renders the shared movies list with 5 items', async () => {
    getSharedMovies.mockResolvedValueOnce({ data: MOCK_SHARED_MOVIES });

    render(<HomeModule />);
    expect(getSharedMovies).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      const list = screen.getByRole('list', { name: /movies/i });
      const { getAllByRole } = within(list);
      const items = getAllByRole('listitem');
      expect(items.length).toBe(5);
    });
  });

  test('an error is rendered if there is a problem getting shared movies', async () => {
    const message = 'Error message';
    getSharedMovies.mockRejectedValueOnce({ message });

    render(<HomeModule />);
    expect(getSharedMovies).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      const errorText = screen.getByText('Error message');
      expect(errorText).toBeInTheDocument();
    });
  });

  test('calls vote api successfully', async() => {
    getSharedMovies.mockResolvedValueOnce({ data: [MOCK_SHARED_MOVIES[0]] });
    vote.mockResolvedValueOnce({isSuccess: true})

    render(<HomeModule />)
    expect(getSharedMovies).toHaveBeenCalledTimes(1)

    await waitFor(() => {
      const list = screen.getByRole('list', { name: /movies/i });
      const { getAllByRole } = within(list);
      const items = getAllByRole('listitem');
      expect(items.length).toBe(1);
    });

    const voteUpButton = screen.getByRole('button', {name: 'Up'})
    fireEvent.click(voteUpButton)
    await waitFor(() => {
      expect(vote).toHaveBeenCalledTimes(1)
    })
  }) 
});
