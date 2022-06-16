import React from 'react';
import ShareModule from '../index';
import { render } from '../../../utils/testing'
import '@testing-library/jest-dom'

describe('ShareModule', () => {
  it('matches snapshot', () => {
    const { container } = render(<ShareModule />);
    // eslint-disable-next-line testing-library/no-container
    expect(container.cloneNode(true)).toMatchSnapshot();
  });
});
