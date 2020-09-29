import React from 'react';

import AuthorContainer from '../../Authors/Container';
import SimilarList from '../SimilarBooks';

import styles from './BookCard.module.css';

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
      <Card>
        <CardBody>
          <Image book={this.props.book} />
          <BookBlock book={this.props.book} />
          <AuthorContainer authors={Authors} />
        </CardBody>
        <SubscribeButtonBody>
          <SubscribeButton>Подписаться</SubscribeButton>
        </SubscribeButtonBody>
        <SimilarList/>
      </Card>
    );
  }
}

export default BookCard;

const SubscribeButtonBody = ({ children }) => (
  <div className={styles.subscribeButtonBody}>
    {children}
  </div>
);

const CardBody = ({ children }) => (
  <div className={styles.bookContainer}>
    {children}
  </div>
);

const Card = ({ children }) => (
  <div>
    {children}
  </div>
);

const Image = ({book}) => (
  <div className={styles.imageBox}>
    <img className={styles.image} src={book.Cover} alt={book.Title} />
  </div>
);

const SubscribeButton = ({children}) => (
  <div>
    <button className={styles.subscribeButton}>{children}</button>
  </div>
);

const BookBlock = ({book}) => (
  <div className={styles.cardBody}>
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
    <div className={styles.title}>{book.Title}</div>
    <div className={styles.description}>Краткое описание: {book.Description}</div>
    <div>Количество страниц: {book.NumbersOfPage}</div>
    <div>Язык: {book.Language}</div>
    <div>Процент прогресса: {book.Progress}%</div>
    <div>Минимальная цена: {book.MinimumPrice} руб.</div>
    <div>Желаемая цена: {book.SuggestedPrice} руб.</div>
    <div>Собранная сумма: {book.CollectedAmount} руб.</div>
    <div>Ожидаемая сумма: <span>{book.ExpectedAmount}</span> руб.</div>
  </>
);
