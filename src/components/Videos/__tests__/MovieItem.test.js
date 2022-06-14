import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MovieItem } from '../MovieItem';
import '@testing-library/jest-dom'
import { MOCK_SHARED_MOVIES } from '../../../../constants';

describe('MovieItem', () => {
  it('renders default state', () => {
    render(<MovieItem info={MOCK_SHARED_MOVIES[0]}/>);

    const titleEl = screen.getByRole('heading');
    expect(titleEl).toBeInTheDocument();
    const sharedByText = screen.getByText('Shared by:');
    expect(sharedByText).toBeInTheDocument();
    const descriptionText = screen.getByText('Description:');
    expect(descriptionText).toBeInTheDocument();
  });

  it('renders signed state', () => {
    render(<MovieItem canVote info={MOCK_SHARED_MOVIES[0]}/>);

    const voteButton = screen.getAllByRole('button');
    expect(voteButton.length).toBeGreaterThan(0);
  });

  it('call onVote when vote button click', () => {
    const onVoteSpy = jest.fn();
    render(<MovieItem canVote onVote={onVoteSpy} info={MOCK_SHARED_MOVIES[0]}/>);

    const voteButton = screen.getAllByRole('button');
    fireEvent.click(voteButton[0]);
    fireEvent.click(voteButton[1])

    expect(onVoteSpy).toHaveBeenCalledTimes(2);
  });
});
