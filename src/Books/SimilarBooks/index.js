import React from 'react';

import similar from './similar.json';
import styles from './SimilarBooks.module.css';

class SimilarList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: similar
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
      <SimilarListBody>
      {this.state.items.length > 0 ?
        this.state.items.slice(0, 3).map(book => (
          <div className={styles.similar} key={book.Id}>
            <Similar book={book} handleHideBook={this.handleHideBook} />
          </div>
        ))
      : <div>Похожих книг больше нет.</div>
      }
      </SimilarListBody>
    )
  }
}

export default SimilarList;

const SimilarListBody = ({ children }) => (
  <div className={styles.similarContainer}>
    {children}
  </div>
);

const Similar = React.memo(({book, handleHideBook}) => (
    <>
      <div className={styles.closeBtn}>
        <button onClick={() => handleHideBook(book.Id)}>X</button>
      </div>
      <div className={styles.imageBox}>
        <img className={styles.image} src={book.Cover} alt={book.Title} />
        </div>
      <div className={styles.title}>{book.Title}</div>
      <div>{book.Author}</div>
    </>
));
