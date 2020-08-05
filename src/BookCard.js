import React from 'react';

import AuthorsList from './AuthorsList';
import SubscribeButton from './SubscribeButton';
import FamousBook from './FamousBook';
import BookImage from './BookImage';


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
        Title,
        Description,
        NumbersOfPage,
        Language,
        Progress,
        Cover,
        MinimumPrice,
        SuggestedPrice,
        CollectedAmount,
        ExpectedAmount,
        Subscribers,
        Authors
      }
    } = this.props;

    return (
      <div style={styles.container}>
        <BookImage cover={Cover} title={Title} />
        <div style={styles.cardBody}>
          <FamousBook subscribers={Subscribers}>Популярная книга!</FamousBook>
          <div style={styles.title}>{Title}</div>
          <div style={styles.description}>Краткое описание: {Description}</div>
          <div>Количество страниц: {NumbersOfPage}</div>
          <div>Язык: {Language}</div>
          <div>Процент прогресса: {Progress}%</div>
          <div>Минимальная цена: {MinimumPrice} руб.</div>
          <div>Желаемая цена: {SuggestedPrice} руб.</div>
          <div>Собранная сумма: {CollectedAmount} руб.</div>
          <div>Ожидаемая сумма: <span>{ExpectedAmount}</span> руб.</div>
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
  imageBox: {
    flexBasis: '300px'
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
  }
};