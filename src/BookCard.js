import React from 'react';

import AuthorsList from './AuthorsList';
import SubscribeButton from './SubscribeButton';
import FamousBook from './FamousBook';
import BookImage from './BookImage';
import BookInfo from './BookInfo';


class BookCard extends React.Component {
  constructor(props) {
    super(props);
    this.toggleAllAuthorsShow = this.toggleAllAuthorsShow.bind(this);
    this.state = { allAuthorsShow: false };
  }
  toggleAllAuthorsShow() {
    this.setState({ allAuthorsShow: !this.state.allAuthorsShow});
  }

  render() {
    if (!this.props.book) {
      return <div>Empty Book</div>;
    }
    const { 
      book: {
        Cover,
        Title,
        Subscribers,
        Authors
      }
    } = this.props;
    const bookInfo = this.props.book;

    return (
      <div style={styles.container}>
        <BookImage cover={Cover} title={Title} />
        <div style={styles.cardBody}>
          <FamousBook subscribers={Subscribers}>Популярная книга!</FamousBook>
          <BookInfo bookInfo={bookInfo} />
        </div>
        <div style={styles.authors}>
        {
          (Authors.length > 3 && !this.state.allAuthorsShow) ?
          <AuthorsList authors={Authors.slice(0, 3)} /> :
          <AuthorsList authors={Authors} />
        }
        {
          Authors.length > 3 && 
          <div>
            <button onClick={this.toggleAllAuthorsShow}>
              toggle authors {Authors.length}
            </button>
          </div>
        }
        </div>  
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
  },
  cardBody: {
    flex: '3',
    display: 'flex',
    flexDirection: 'column',
    padding: '15px 10px'
  },
  authors: {
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
  }
};