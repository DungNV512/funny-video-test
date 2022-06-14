/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { ShareModule } from '..';
import { shareMovie } from '../../api';
import '@testing-library/jest-dom'

jest.mock('../../api');

afterEach(() => {
  jest.resetAllMocks();
});

describe('ShareModule', () => {
  test('initial state', () => {
    render(<ShareModule />);
    // it renders empty url field
    const urlField = screen.getByRole('textbox', {name: 'Youtube URL:'})
    expect(urlField).toHaveValue('');

    // it renders enabled share button
    const buttonShare = screen.getByRole('button', { name: 'Share' });
    expect(buttonShare).not.toBeDisabled();
  });

  test('share successfully', async () => {
    shareMovie.mockResolvedValueOnce({ isSucess: true });

    render(<ShareModule />);

    const urlField = screen.getByRole('textbox', {name: 'Youtube URL:'})
    const buttonShare = screen.getByRole('button', { name: 'Share' });

    // fill out and submit form
    fireEvent.change(urlField, { target: { value: 'https://youtube.com' } });
    fireEvent.click(buttonShare);

    // it sets loading state
    expect(buttonShare).toBeDisabled();
    expect(buttonShare).toHaveTextContent('Loading...');

    await waitFor(() => {
      // it hides form elements
      expect(buttonShare).not.toBeInTheDocument();
      expect(urlField).not.toBeInTheDocument();
    });
  });

  test('share error', async () => {
    const message = 'Share error';
    shareMovie.mockRejectedValueOnce({ message });

    render(<ShareModule />);

    const urlField = screen.getByRole('textbox', {name: 'Youtube URL:'})
    const buttonShare = screen.getByRole('button', { name: 'Share' });

    // fill out and submit form
    fireEvent.change(urlField, { target: { value: 'https://youtube.com' } });
    fireEvent.click(buttonShare);

    // it sets loading state
    expect(buttonShare).toBeDisabled();
    expect(buttonShare).toHaveTextContent('Loading...');

    await waitFor(() => {
      // it resets button
      expect(buttonShare).not.toBeDisabled();

      // it displays error text
      const errorText = screen.getByText('Error:');
      expect(errorText).toBeInTheDocument();
      const errorMessageText = screen.getByText(message);
      expect(errorMessageText).toBeInTheDocument();
    });
  });
});
