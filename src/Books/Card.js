import React from 'react';


import AuthorContainer from '../Authors/Container';
import SimilarList from './SimilarList';
import similar from '../similar.json';



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
      <div>
        <div style={styles.bookContainer}>
          <Image book={this.props.book} />
          <BookContainer book={this.props.book} />
          <AuthorContainer authors={Authors} />
        </div>
        <div style={styles.subscribeContainer}>
          <SubscribeButton>Подписаться</SubscribeButton>
        </div>
        <div style={styles.similarContainer}>
          <SimilarList similar={similar} />
        </div>
      </div>
    );
  }
}

export default Card;

const Image = ({book}) => (
  <div style={styles.imageBox}>
    <img style={styles.image} src={book.Cover} alt={book.Title} />
  </div>
);

const SubscribeButton = ({children}) => (
  <div>
    <button style={styles.subscribeButton}>{children}</button>
  </div>
);

const BookContainer = ({book}) => (
  <div style={styles.cardBody}>
    { (book.Subscribers > 20) &&
      <Famous>Популярная книга!</Famous>
    }
    <Info book={book} />
  </div>
);

const Famous = ({children}) => (
  <div>{children}</div>
);

const Info = ({book}) => (
  <>
    <div style={styles.title}>{book.Title}</div>
    <div style={styles.description}>Краткое описание: {book.Description}</div>
    <div>Количество страниц: {book.NumbersOfPage}</div>
    <div>Язык: {book.Language}</div>
    <div>Процент прогресса: {book.Progress}%</div>
    <div>Минимальная цена: {book.MinimumPrice} руб.</div>
    <div>Желаемая цена: {book.SuggestedPrice} руб.</div>
    <div>Собранная сумма: {book.CollectedAmount} руб.</div>
    <div>Ожидаемая сумма: <span>{book.ExpectedAmount}</span> руб.</div>
  </>
);

const styles = {
  bookContainer: {
    display: 'flex',
    marginBottom: '30px'
  },
  subscribeContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px'
  },
  similarContainer: {
    display: 'flex',
    marginBottom: '50px',
    justifyContent: 'center'
  },
  imageBox: {
    flexBasis: '300px',
    padding: '15px 10px'
  },
  image: {
    width: '100%'
  },
  cardBody: {
    flex: '3',
    display: 'flex',
    flexDirection: 'column',
    padding: '15px 10px'
  },
  description: {
    margin: '20px 0',
    flexBasis: '100px'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.1rem'
  },
  authors: {
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
  },
  subscribeButton: {
    fontSize: "1.2rem",
    padding: "10px 30px"
  }
};