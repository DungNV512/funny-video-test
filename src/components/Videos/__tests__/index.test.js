import React from 'react';
import { screen, waitFor, within } from '@testing-library/react';
import Videos from '../index';
import MOCK_SHARED_VIDEOS from '../../../mockAPI/videos.json';
import videoServices from '../../../services/videos';
import { render } from '../../../utils/testing'
import '@testing-library/jest-dom'

jest.mock('../../../services/videos');

afterEach(() => {
  jest.resetAllMocks();
});

describe('Videos', () => {
  videoServices.getPublicContent.mockResolvedValueOnce({ data: [] });

  it('renders empty list', () => {
    render(<Videos />);

    const emptyText = screen.getByText('Empty.');
    expect(emptyText).toBeInTheDocument();
  });

  it('renders list of 3 movies', async () => {
    videoServices.getPublicContent.mockResolvedValueOnce({ data: MOCK_SHARED_VIDEOS.data });

    render(<Videos />);

    await waitFor(() => {
      const list = screen.getByRole('list');
      const { getAllByRole } = within(list);
      const items = getAllByRole('listitem');
      expect(items.length).toBe(3);
    })
  });
});
