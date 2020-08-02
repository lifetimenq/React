import React from 'react';

import AuthorsList from './AuthorsList';

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
        <div style={styles.imageBox}>
          <img style={styles.image} src={Cover} alt={Title} />
        </div>
        <div style={styles.cardBody}>
          {
            Subscribers > 20 &&
            <div>Популярная книга</div>
          }
          <div style={styles.title}>{Title}</div>
          <div>Краткое описание: {Description}</div>
          <div>Количество страниц: {NumbersOfPage}</div>
          <div>Язык: {Language}</div>
          <div>Процент прогресса: {Progress}%</div>
          <div>Минимальная цена: {MinimumPrice} руб.</div>
          <div>Желаемая цена: {SuggestedPrice} руб.</div>
          <div>Собранная сумма: {CollectedAmount} руб.</div>
          <div>Ожидаемая сумма: <span>{ExpectedAmount}</span> руб.</div>
        </div>
        <div>
        {
          Authors.length > 3 && 
          <button onClick={this.toggleAllAuthorsShow}>
            toggle authors {Authors.length}
          </button>
        }
        {
          (Authors.length > 3 && !this.state.allAuthorsShow) ?
          <AuthorsList authors={Authors.slice(0, 3)} /> :
          <AuthorsList authors={Authors} />
        }
        </div>  
        <div>
          <button>Подписаться</button>
        </div>
      </div>
    );
  }
}

export default BookCard;


const styles = {
  container: {
    display: 'flex',
    fontFamily: 'sans-serif'
  },
  imageBox: {
    maxWidth: '200px'
  },
  image: {
    width: '100%'
  },
  cardBody: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '15px 10px'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.1rem'
  }
};