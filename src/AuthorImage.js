import React from 'react';

class AuthorImage extends React.Component {
  render() {
    const Avatar = this.props.avatar;
    const Name = this.props.name;
    
    return (
      <div style={styles.imageBox}>
        <img style={styles.image} src={Avatar} alt={Name} />
      </div>
    )
  }
}

export default AuthorImage;

const styles = {
  imageBox: {
      maxWidth: '100px'
  },
  image: {
      width: '100%'
  }
};