/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import ShareModule from '../index';
import videoServices from '../../../services/videos';
import { render } from '../../../utils/testing'
import '@testing-library/jest-dom'

jest.mock('../../../services/videos');

afterEach(() => {
  jest.resetAllMocks();
});

describe('ShareModule', () => {
  test('initial state', () => {
    render(<ShareModule />);
    // it renders empty url field
    const urlField = screen.getByRole('textbox', {name: 'Share a movie'})
    expect(urlField).toHaveValue('');

    // it renders enabled share button
    const buttonShare = screen.getByRole('button', { name: 'Share' });
    expect(buttonShare).not.toBeDisabled();
  });

  test('share successfully', async () => {
    videoServices.shareVideo.mockResolvedValueOnce({ isSucess: true });

    render(<ShareModule />);

    const urlField = screen.getByRole('textbox', {name: 'Share a movie'})
    const buttonShare = screen.getByRole('button', { name: 'Share' });

    // fill out and submit form
    fireEvent.change(urlField, { target: { value: 'https://youtube.com' } });
    fireEvent.click(buttonShare);

    await waitFor(() => {
      expect(videoServices.shareVideo).toBeCalledTimes(1)
    });
  });

  test('share error', async () => {
    const message = 'Share error';
    videoServices.shareVideo.mockRejectedValueOnce({ message });

    render(<ShareModule />);

    const urlField = screen.getByRole('textbox', {name: 'Share a movie'})
    const buttonShare = screen.getByRole('button', { name: 'Share' });

    // fill out and submit form
    fireEvent.change(urlField, { target: { value: 'https://youtube.com' } });
    fireEvent.click(buttonShare);

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
