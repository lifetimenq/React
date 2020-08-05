import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AuthorCard from "./AuthorCard";

test('render author in a card', () => {
  const book = {
    'Title': 'How to earn more than 1 million',
    'Description': 'Just invent antigravity reactor',
    'NumbersOfPage': '97',
    'Language': 'Hebrew',
    'Progress': '87',
    'Cover': 'https://lh3.googleusercontent.com/pw/ACtC-3f-CLY1npKixB7HgRhaO_TZUstVQ2MIfH1jPxZcEbVwP7t7e36il5ry-Q6V06mhgeEUcG6zQ_s0ZbIAz3yRXw_IiJeHaxkZMWhN1Kc9VXJAvWeSG1MlDScNAJ2Ra0DJfsfzV4HrolQPcsz3JojsRQcE=w925-h620-no?authuser=0',
    'Author': {
      'Name': 'Albert Einstein',
      'Email': 'Albert.tor@example.com',
      'Avatar': 'https://lh3.googleusercontent.com/qV1COB10emYuj4jmRhGJCkt8utBCnRz1tX0bjpFaB3I_GgM_ziHDgiMQL-3Ygwp_h1DxslHiUctl7F12NYOF-n988_5e-2ktawo8NNyn7Wzt_m3FlwSMJ5kk3dsQJYboxV8bo4ZjnUfgfDvtCMnpvRE9hC-VVCPuBKyVdr1FYP8nWyHQXiArlLppWGxVIZ6YMNs-ibMTC3b10TIMtU0M8VcpnHkp7w0UmYU8iNZ3Wj0hq4hFcLxX6OTBFCrtry9bFmatOoLwOWJmm-6EP7Fu99RLjQQc2FwIl4q032mRkvKCyL2KyaFqe4OeNd2kcYnRRzJ7i8H2u7_YF-hO68Of_UxB8nZ_XrdjwyG3caTkmAnP8VkLCPsBM720RYYqbFgy3JP0af8ASad78z6958M3ISLOlHFuooFB5GiGgZAtIrCk8AE5r6Xm2NpUvv9u1EWFMAluL_GVAZKSQoCdUlXEWRTZp9zetVT8RwO5ScXOSKdR1pFWhccjPckeYe0LmJRwS_1_rY-Fp5wdtTKqoLR2QtaQR4DpDhsTVyMJcXXULBYIG__EcRsMZ1Kg68F4konAzxwuQ68IEQN5eogDzMGqyo9skAFMsroZqxyfLSUvMl4oJrrADvnnp2AdQFQ6VXybAZrvHGDQph3eXF3PIi-visWQuuZ3Ahroq-BJ4deKAr4qwLAIA8DxUiEzCZzJZw=w1200-h630-no?authuser=0',
      'Info': 'Creator of the theory of relativity'
    },
    'MinimumPrice': '199.99',
    'SuggestedPrice': '299.99',
    'CollectedAmount': '2599.20',
    'ExpectedAmount': '10000'
  };

  const { getByText } = render(<AuthorCard book={book} />);

  expect(getByText('Albert Einstein')).toBeInTheDocument();
  expect(getByText('Creator of the theory of relativity')).toBeInTheDocument();
});

test('render empty author card', () => {
  const { getByText } = render(<AuthorCard />);

  expect(getByText('Empty Author')).toBeInTheDocument();
});