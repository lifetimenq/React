import React from 'react';

import AuthorsList from './AuthorsList';
import SubscribeButton from './SubscribeButton';
import BookImage from './BookImage';
import BookContainer from './BookContainer';
import AuthorContainer from './AuthorContainer';

class BookCard extends React.Component {
  render() {
    if (!this.props.book) {
      return <div>Empty Book</div>;
    }
    const { 
      book: {
        Cover,
        Title,
        Authors
      }
    } = this.props;

    return (
      <div style={styles.container}>
        <BookImage cover={Cover} title={Title} />
        <BookContainer book={this.props.book} />
        <AuthorContainer authors={Authors} />
        <SubscribeButton>Подписаться</SubscribeButton>
      </div>
    );
  }
}

export default BookCard;


const styles = {
  container: {
    display: 'flex',
    marginBottom: '30px'
  }
};