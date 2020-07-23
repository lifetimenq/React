import ReactDom from 'react-dom';
import React from 'react';

import App from "./App";

const book = {
    'Title': 'How to earn more than 1 million',
    'Description': 'Just invent antigravity reactor',
    'NumbersOfPage': '97',
    'Language': 'Hebrew',
    'Progress': '87',
    'Cover': 'http://cover.png',
    'Author': {
        'Name': 'Albert Einstein',
        'Email': 'Albert.tor@example.com',
        'Avatar': 'http://avatar.png',
        'Info': 'Creator of the theory of relativity'
    },
    'MinimumPrice': '199.99',
    'SuggestedPrice': '299.99',
    'CollectedAmount': '2599.20',
    'ExpectedAmount': '10000'
};

ReactDom.render(
    <App book={book} />,
    document.getElementById('root')
);