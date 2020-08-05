import React from 'react';
import AuthorImage from './AuthorImage';
import AuthorInfo from './AuthorInfo';

class AuthorCard extends React.Component {
  render() {
    if (!this.props.author) {
      return <div>Empty Author</div>;
    }

    const {
      author: {
        Name,
        Avatar,
      }
    } = this.props;
    const author = this.props;

    return (
      <div style={styles.container}>
        <AuthorImage avatar={Avatar} name={Name}/>
        <AuthorInfo author={author} />
      </div>
    );
  }
}

export default AuthorCard;

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center'
  }
};