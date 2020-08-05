import React from 'react';

class BookInfo extends React.Component {
  render() {
    const {
      bookInfo: {
        Title,
        Description,
        NumbersOfPage,
        Language,
        Progress,
        MinimumPrice,
        SuggestedPrice,
        CollectedAmount,
        ExpectedAmount,
      }
    } = this.props;
    return (
      <>
        <div style={styles.title}>{Title}</div>
        <div style={styles.description}>Краткое описание: {Description}</div>
        <div>Количество страниц: {NumbersOfPage}</div>
        <div>Язык: {Language}</div>
        <div>Процент прогресса: {Progress}%</div>
        <div>Минимальная цена: {MinimumPrice} руб.</div>
        <div>Желаемая цена: {SuggestedPrice} руб.</div>
        <div>Собранная сумма: {CollectedAmount} руб.</div>
        <div>Ожидаемая сумма: <span>{ExpectedAmount}</span> руб.</div>
      </>
    );
  }
}

export default BookInfo;

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