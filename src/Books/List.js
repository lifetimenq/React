import React from 'react';

import Card from './Card';
import withLoader from '../HOC/withLoader';

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

export default withLoader(List);