import React from 'react';

class BookImage extends React.Component {
  render() {
    const Cover = this.props.cover;
    const Title = this.props.title;
    return (
      <div style={styles.imageBox}>
        <img style={styles.image} src={Cover} alt={Title} />
      </div>
    )
  }
}

export default BookImage;

const styles = {
  imageBox: {
    flexBasis: '300px'
  },
  image: {
    width: '100%'
  }
};