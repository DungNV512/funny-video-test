import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { Movies } from '../Movies';
import { MOCK_SHARED_MOVIES } from '../../../../constants';
import '@testing-library/jest-dom'

describe('Movies', () => {
  it('renders empty list', () => {
    render(<Movies movies={[]} />);

    const emptyText = screen.getByText('Empty.');
    expect(emptyText).toBeInTheDocument();
  });

  it('renders loading state', () => {
    render(<Movies isLoading movies={[]}/>);

    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
  });

  it('renders list of 5 movies', () => {
    render(<Movies movies={MOCK_SHARED_MOVIES} />);

    const list = screen.getByRole('list', { name: /movies/i });
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(5);
  });
});
