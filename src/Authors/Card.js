import React from 'react';
import Image from './Image';
import Info from './Info';

class Card extends React.Component {
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
        <Image avatar={Avatar} name={Name}/>
        <Info author={author} />
      </div>
    );
  }
}

export default Card;

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center'
  }
};