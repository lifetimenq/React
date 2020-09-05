import { useEffect, useState} from 'react';

import axios from 'axios';


const API_TOKEN = 'keyG0c7aAoXmpprjM';
const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appFnjL5yWDtdrvV6',
  timeout: 1000,
  headers: {
    'Authorization' : `Bearer ${API_TOKEN}`
  }
});

function _mapFromAirtable(data) {
  return data.records.map(book => ({
    Id: book.id,
    Title: book.fields.Title,
    Description: book.fields.Description,
    NumbersOfPage: book.fields.NumbersOfPage,
    Language: book.fields.Language,
    Progress: book.fields.Progress,
    Cover: book.fields.Cover[0].thumbnails.full.url,
    MinimumPrice: book.fields.MinimumPrice,
    SuggestedPrice: book.fields.SuggestedPrice,
    CollectedAmount: book.fields.CollectedAmount,
    ExpectedAmount: book.fields.ExpectedAmount,
    Subscribers: book.fields.Subscribers,
    Authors: book.fields.Authors,
  }));
}

function _fetchData(table) {

  const params = {
    filterByFormula: 'IF({Active},TRUE(),FALSE())'
  }

  return (
    httpClient.get(
    `/${table}`,
    {
      params: params
    }

    )
    .then(result => result.data)
    .then(_mapFromAirtable)
  );
  
}

const useBooks = () => {
  const [books, setBooks] = useState(null);

  useEffect( () => {
    _fetchData('Books').then(books => {
      setBooks(books);
    });
  }, ['Books']);

  return books;

};

export default useBooks;