import React from 'react';

class Image extends React.Component {
  render() {
    const { cover, title } = this.props;
    return (
      <div style={styles.imageBox}>
        <img style={styles.image} src={cover} alt={title} />
      </div>
    )
  }
}

export default Image;

const styles = {
  imageBox: {
    flexBasis: '300px'
  },
  image: {
    width: '100%'
  }
};