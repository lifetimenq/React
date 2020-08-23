import React from 'react';


class SimilarList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          "Id": "1",
          "Title": "Просто делай! Делай просто!",
          "Cover": "https://lh3.googleusercontent.com/pw/ACtC-3dc1qv8JA7QlznOJY_pMZUsYC5hIZD_QyKEIBQsgiakd59f5xYa50WUA4Bm7S6FUgUnHB5GWxYG4kTZHPfKxWuQ8P1naV7PCDaCTGnImDSAJ9wIvv8MnvRxSFoNYtpDIgn7q09viuke96O5FZy564Zn=w415-h609-no?authuser=0",
          "Author": "Оскар Хартманн"
        },
        {
          "Id": "2",
          "Title": "Думай медленно… Решай быстро",
          "Cover": "https://lh3.googleusercontent.com/pw/ACtC-3fpuUAKbOJq97Dr8Oy-WM4Ipl9CBXm-Ic4NalC5ojGrufEQFsWvdipPgTyifQlBJwipIBluLOiCMq81WqlARLLs_HU20fEJ6FgcADB9ZoEGthVYAegBuhwaXOWr7wyMSzUNyO54yybjIfyz8xreognv=w415-h621-no?authuser=0",
          "Author": "Даниэль Канеман"
        },
        {
          "Id": "3",
          "Title": "Самый богатый человек в Вавилоне",
          "Cover": "https://lh3.googleusercontent.com/pw/ACtC-3ej6WIF2PGhL0r8jUbzu3Dzactg0hqBT4aqoGDmO9mf7t3DTQb8wbQLpK5YVHSfoJOS8tqCeKCR0oThIwZ5fa90O84r-7pxT9VXQlL5EBGFl3dLLm1iTbbPMbhF0wN9kiCJu0FiFhMQPWXjpBV-_k6K=w415-h608-no?authuser=0",
          "Author": "Джордж Сэмюэль Клейсон"
        },
        {
          "Id": "4",
          "Title": "7 навыков высокоэффективных людей: Мощные инструменты развития личности",
          "Cover": "https://lh3.googleusercontent.com/pw/ACtC-3e2p4K0Z2D9kCrE-pe9WX1VE69LfeYG0RwYGbqtN1ZKCr_3ngmDwPxxjvuvchAdwyVwZKuRp09BQyJKxYWpLHWE8ZDVV3KNSd5LBJUgByTxnqZTYyFK6MZq5Zs51kYFOtIUNVdla1Y4A5KTvR8Gfkt3=w415-h593-no?authuser=0",
          "Author": "Стивен Кови"
        },
        {
          "Id": "5",
          "Title": "Принципы. Жизнь и работа",
          "Cover": "https://lh3.googleusercontent.com/pw/ACtC-3crL0b4Z5z4BSW5hjjcFqoU7Y9Xkr4fveZ8Wg2RDBZd2-vixuSjraBS02fPlM3JqroturZz98mox5n02_f6_U5-EgfOP7QbcwGqAGv9CPTyvGH17x8PAO9LHBhzTUpXB6AOMwHs5_Iv9dZcnnHHOpx9=w415-h628-no?authuser=0",
          "Author": "Рэй Далио"
        },
        {
          "Id": "6",
          "Title": "Канбан Метод. Улучшение системы управления",
          "Cover": "https://lh3.googleusercontent.com/pw/ACtC-3fuqvuKlQnPpavP0nX3bLG17JpVa2L19agVPgbXOUt7oy8GScu_3WDl5A0mr6b2FLPykP1JyeP0OnPLWNDTAMpeeEr0yw6yW_lMz6agCBD6Ez_7jdpebSMUDwkltdxCIZkjlZJcv1mQHfL7lUsgUfVC=w415-h602-no?authuser=0",
          "Author": "Майк Барроуз"
        }
      ]
    }
    
    this.handleHideBook = this.handleHideBook.bind(this);
  }

  handleHideBook(bookId) {
    this.setState((state) => {
      return {
        items: state.items.filter(item => item.Id != bookId)
      }
    })
  }

  render() {
    return (
      <>
      {this.state.items.length > 0 ?
        this.state.items.slice(0, 3).map(book => (
          <div style={styles.similar} key={book.Id}>
            <Similar book={book} handleHideBook={this.handleHideBook} />
          </div>
        ))
      : <div>Похожих книг больше нет.</div>
      }
      </>
    )
  }
}

export default SimilarList;

const Similar = React.memo(({book, handleHideBook}) => (
    <>
      <div style={styles.closeBtn}>
        <button onClick={() => handleHideBook(book.Id)}>X</button>
      </div>
      <div style={styles.imageBox}>
        <img style={styles.image} src={book.Cover} alt={book.Title} />
        </div>
      <div style={styles.title}>{book.Title}</div>
      <div>{book.Author}</div>
    </>
));

const styles = {
  imageBox: {
    maxWidth: '100px'
  },
  image: {
    width: '100%'
  },
  similar: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '33.3333333%',
    alignItems: 'center',
    textAlign: 'center'
  },
  title: {
    fontWeight: 700
  },
  closeBtn: {
    marginBottom: 5,
  }
}