import React from 'react';

import Card from './Card';


class List extends React.Component {
  render() {
    return (
      <div>
        {this.props.books.map(book => (
          <div key={book.Id}>
            <Card book={book} />
          </div>
        ))}
      </div>
    )
  }
}

export default List;