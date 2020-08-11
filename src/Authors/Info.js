import React from 'react';
import Image from './Image';

class Info extends React.Component {
  render() {
    const {
      author: {
        Name,
        Email,
        Info
      }
    } = this.props;

    return (
      <div style={styles.cardBody}>
        <div style={styles.title}>{Name}</div>
        <div>e-mail: {Email}</div>
        <div>Информация об авторе: <span>{Info}</span></div>
      </div>
    )
  }
}

export default Info;

const styles = {
  cardBody: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      padding: '15px 10px'
  },
  title: {
      fontWeight: 'bold',
      fontSize: '1.1rem'
  }
};