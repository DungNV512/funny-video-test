import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import VideoItem from '../VideoItem';
import '@testing-library/jest-dom';
import MOCK_SHARED_VIDEOS from '../../../mockAPI/videos.json';
import * as selectAuth from '../../../selector/auth/selectAuth';
import { render } from '../../../utils/testing';

jest.mock('../../../selector/auth/selectAuth');

describe('VideoItem', () => {
  it('renders default state', () => {
    selectAuth.selectIsAuth.mockReturnValue(true);

    render(<VideoItem video={MOCK_SHARED_VIDEOS.data[0]} />);

    const titleEl = screen.getByRole('heading');
    expect(titleEl).toBeInTheDocument();
    const sharedByText = screen.getByText('Shared by:');
    expect(sharedByText).toBeInTheDocument();
    const descriptionText = screen.getByText('Description:');
    expect(descriptionText).toBeInTheDocument();
  });

  it('renders signed state', () => {
    selectAuth.selectIsAuth.mockReturnValue(true);

    render(<VideoItem video={MOCK_SHARED_VIDEOS.data[0]} />);

    const voteButton = screen.getAllByRole('button');
    expect(voteButton.length).toBeGreaterThan(0);
  });

  it('call onVote when vote button click', () => {
    const onVoteSpy = jest.fn();
    render(<VideoItem onVote={onVoteSpy} video={MOCK_SHARED_VIDEOS.data[0]} />);

    const voteButton = screen.getAllByRole('button');
    fireEvent.click(voteButton[0]);
    fireEvent.click(voteButton[1]);

    expect(onVoteSpy).toHaveBeenCalledTimes(2);
  });
});
