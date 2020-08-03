import React from 'react';

import BookCard from './BookCard';
import SubscribeModal from './SubscribeModal';

class BooksList extends React.Component {
  render() {
    return (
      <>
        <SubscribeModal />
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