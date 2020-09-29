import React from 'react';

import BookCard from './BookCard';
import withLoader from '../HOC/withLoader';

class List extends React.Component {
  
  render() {
    const { books } = this.props;
    return (
      <div>
        { 
        books.map(book => (
          <div key={book.Id}>
            <BookCard book={book} />
          </div>
        ))
        }
      </div>
    )
  }
}

export default withLoader(List);