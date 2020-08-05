import React from 'react';

import BookCard from './BookCard';


class BooksList extends React.Component {
  render() {
    return (
      <>
        <div>
          {this.props.books.map(book => (
            <div key={book.Id}>
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default BooksList;