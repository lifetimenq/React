import React from 'react';

import App from './App';

import { render } from '@testing-library/react';

describe('Routing', () => {
  it('render main page', () => {
    const result = render(<App />);

    const headerEl = result.getByText('CF-Book App');
    expect(headerEl).toBeTruthy();
  })
})