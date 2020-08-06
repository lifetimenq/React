import React from 'react';

import SubscribeButton from '../Shared/SubscribeButton';
import BookImage from './Image';
import BookContainer from './Container';
import AuthorContainer from '../Authors/Container';

class Card extends React.Component {
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

export default Card;


const styles = {
  container: {
    display: 'flex',
    marginBottom: '30px'
  }
};