import React from 'react';
import { render, screen } from '@testing-library/react';
import { ShareModule } from '..';
import '@testing-library/jest-dom'

describe('ShareModule', () => {
  it('matches snapshot', () => {
    const { container } = render(<ShareModule />);
    // eslint-disable-next-line testing-library/no-container
    expect(container.cloneNode(true)).toMatchSnapshot();
  });

  it('renders default state', () => {
    render(<ShareModule />)

    // signed in
    const loggedInText = screen.getByText('Welcome');
    expect(loggedInText).toBeInTheDocument();
    const emailAddressText = screen.getByText('test@email.com');
    expect(emailAddressText).toBeInTheDocument();

    const buttonShare = screen.getByRole('button', {name: /share a movie/i})
    expect(buttonShare).not.toBeDisabled()
  })
});
