import React from 'react';

import Card from './Card';
import withLoader from '../HOC/withLoader';
import withBooks from '../HOC/withBooks';

class List extends React.Component {
  
  render() {
    const { books } = this.props;
    return (
      <div>
        { 
        books.map(book => (
          <div key={book.Id}>
            <Card book={book} />
          </div>
        ))
        }
      </div>
    )
  }
}

export default withBooks(withLoader(List));