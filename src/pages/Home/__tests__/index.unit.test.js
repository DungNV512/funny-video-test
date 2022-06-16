import React from 'react';
import { render } from '../../../utils/testing';
import Home from '../index';

describe('HomeModule', () => {
  it('matches snapshot', () => {
    const { container } = render(<Home />);
    // eslint-disable-next-line testing-library/no-container
    expect(container.cloneNode(true)).toMatchSnapshot();
  });
});
