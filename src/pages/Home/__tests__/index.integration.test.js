/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import {
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import React from 'react';
import HomeModule from '../index';
import videoServices from '../../../services/videos';
import MOCK_SHARED_VIDEOS from '../../../mockAPI/videos.json';
import { render } from '../../../utils/testing';
import '@testing-library/jest-dom'

jest.mock('../../../services/videos');
jest.mock('../../../services/auth');

afterEach(() => {
  jest.resetAllMocks();
});

describe('HomeModule', () => {
  test('initial login state', () => {
    videoServices.getPublicContent.mockResolvedValueOnce({ data: [] });
    render(<HomeModule />);

    // it renders empty video list
    const emptyText = screen.getByText('Empty.')
    expect(emptyText).toBeInTheDocument()
  });

  test('videos load and renders the shared videos list empty', async () => {
    videoServices.getPublicContent.mockResolvedValueOnce({ data: [] });

    render(<HomeModule />);
    expect(videoServices.getPublicContent).toHaveBeenCalledTimes(1);

    const emptyText = await waitFor(() => screen.findByText('Empty.'));
    expect(emptyText).toBeInTheDocument();
  });

  test('videos load and renders the shared videos list with 3 items', async () => {
    videoServices.getPublicContent.mockResolvedValueOnce({ data: MOCK_SHARED_VIDEOS.data });

    render(<HomeModule />);
    expect(videoServices.getPublicContent).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      const list = screen.getByRole('list');
      const { getAllByRole } = within(list);
      const items = getAllByRole('listitem');
      expect(items.length).toBe(3);
    });
  });

  test('an error is rendered if there is a problem getting shared movies', async () => {
    const message = 'Error message';
    videoServices.getPublicContent.mockRejectedValueOnce({ message });

    render(<HomeModule />);
    expect(videoServices.getPublicContent).toHaveBeenCalledTimes(1);
  });

  // test('calls vote api successfully', async() => {
  //   videoServices.getPublicContent.mockResolvedValueOnce({ data: [MOCK_SHARED_VIDEOS[0]] });
  //   vote.mockResolvedValueOnce({isSuccess: true})

  //   render(<HomeModule />)
  //   expect(videoServices.getPublicContent).toHaveBeenCalledTimes(1)

  //   await waitFor(() => {
  //     const list = screen.getByRole('list', { name: /movies/i });
  //     const { getAllByRole } = within(list);
  //     const items = getAllByRole('listitem');
  //     expect(items.length).toBe(1);
  //   });

  //   const voteUpButton = screen.getByRole('button', {name: 'Up'})
  //   fireEvent.click(voteUpButton)
  //   await waitFor(() => {
  //     expect(vote).toHaveBeenCalledTimes(1)
  //   })
  // }) 
});
