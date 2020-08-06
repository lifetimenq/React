import React from 'react';

import Famous from './Famous';
import Info from './Info';

class Container extends React.Component {
  render () {
    const { 
      book: {
        Subscribers
      }
    } = this.props;
    const bookInfo = this.props.book;

    return (
      <div style={styles.cardBody}>
        <Famous subscribers={Subscribers}>Популярная книга!</Famous>
        <Info bookInfo={bookInfo} />
      </div>
    )
  }
}

export default Container;

const styles = {
  cardBody: {
    flex: '3',
    display: 'flex',
    flexDirection: 'column',
    padding: '15px 10px'
  }
};