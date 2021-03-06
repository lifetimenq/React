// не используем этот HOC, вместо него используем hook useBooks
// оставил, потому что жалко удалять такую красоту
import React from 'react';

import axios from 'axios';


const API_TOKEN = 'keyG0c7aAoXmpprjM';
const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appFnjL5yWDtdrvV6',
  timeout: 1000,
  headers: {
    'Authorization' : `Bearer ${API_TOKEN}`
  }
});

const withBooks = EnhancedComponent => class WithBooks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      books: null
    };
  }

  componentDidMount() {
    this._fetchData('Books');
  }

  _mapFromAirtable(data) {
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
  
  _fetchData(table) {

    const params = {
      filterByFormula: 'IF({Active},TRUE(),FALSE())'
    }

    httpClient.get(
      `/${table}`,
      {
        params: params
      }

    )
    .then(result => result.data)
    .then(this._mapFromAirtable)
    .then(books => {
      this.setState({
        books
      })
    })
  }

  render() {
    const { books } = this.state;
    return (
      <EnhancedComponent isLoading={!books} books={books} />
    )
  }
}

export default withBooks;