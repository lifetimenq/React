import React from 'react';

import BookCard from './Card';


class List extends React.Component {
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

export default List;