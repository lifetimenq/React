import React from 'react';


class SimilarList extends React.Component {

  render() {
    return (
      <>
        {this.props.similar.map(book => (
          <div style={styles.similar} key={book.Id}>
            <Similar book={book} />
          </div>
        ))}
      </>
    )
  }
}

export default SimilarList;

const Similar = ({book}) => (
    <>
      <div style={styles.closeBtn}><a href='#'>X</a></div>
      <div style={styles.imageBox}>
        <img style={styles.image} src={book.Cover} alt={book.Title} />
        </div>
      <div style={styles.title}>{book.Title}</div>
      <div>{book.Author}</div>
    </>
);

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
    flexBasis: '20%',
    alignItems: 'center',
    textAlign: 'center'
  },
  title: {
    fontWeight: 700
  },
  closeBtn: {
    alignSelf: 'flex-end',
    display: 'flex',

  }
}