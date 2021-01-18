import React from 'react';

import App from './App';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'


describe('Routing', () => {
  it('render main page', () => {
    const result = render(<App />);

    const headerEl = result.getByText('CF-Book App');
    expect(headerEl).toBeTruthy();
  });

  it('navigating to contacts and back', () =>{
    const result = render(<App />);

    const goToBookHref = result.getByText('Контакты');
    userEvent.click(goToBookHref);

    const textEl = result.getByText('cf-book@mail.com');
    expect(textEl).toBeTruthy();

    const goToHomeBtn = result.getByText('Вернуться назад');
    userEvent.click(goToHomeBtn);

    const headerEl = result.getByText('CF-Book App');
    expect(headerEl).toBeTruthy();

  });
})