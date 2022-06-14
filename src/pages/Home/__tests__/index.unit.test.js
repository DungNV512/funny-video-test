import React from 'react';
import { render } from '@testing-library/react';
import { HomeModule } from '..';

describe('HomeModule', () => {
  it('matches snapshot', () => {
    const { container } = render(<HomeModule />);
    // eslint-disable-next-line testing-library/no-container
    expect(container.cloneNode(true)).toMatchSnapshot();
  });
});
