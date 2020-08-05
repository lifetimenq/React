import React from 'react';

import FamousBook from './FamousBook';
import BookInfo from './BookInfo';

class BookContainer extends React.Component {
  render () {
    const { 
      book: {
        Subscribers
      }
    } = this.props;
    const bookInfo = this.props.book;

    return (
      <div style={styles.cardBody}>
        <FamousBook subscribers={Subscribers}>Популярная книга!</FamousBook>
        <BookInfo bookInfo={bookInfo} />
      </div>
    )
  }
}

export default BookContainer;

const styles = {
  cardBody: {
    flex: '3',
    display: 'flex',
    flexDirection: 'column',
    padding: '15px 10px'
  }
};