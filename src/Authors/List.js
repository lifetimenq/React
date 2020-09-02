import React from 'react';

import withLoader from '../HOC/withLoader';

class List extends React.Component {
  
  render() {
    let { authors } = this.props;
    if(authors != null && authors.length > 3 && !this.props.test) {
      authors = authors.slice(0, 3);
    }
    return (
    <div style={styles.authorsBody}>
    { 
      authors.map(author => (
        <div key={author.Id}>
          <Card author={author} />
        </div>
      ))
    }
    </div>
    )
  }
}

export default withLoader(List);

const Card = React.memo(({ author }) => (
  <div style={styles.container}>
    <Image author={author}/>
    <Info author={author} />
  </div>
));

const Image = ({author}) => (
  <div style={styles.imageBox}>
    <img style={styles.image} src={author.Avatar} alt={author.Name} />
  </div>
);

const Info = ({author}) => (
  <div style={styles.cardBody}>
    <div style={styles.title}>{author.Name}</div>
    <div>e-mail: {author.Email}</div>
    <div>Информация об авторе: <span>{author.Info}</span></div>
  </div>
);


const styles = {
  imageBox: {
    maxWidth: '100px'
  },
  image: {
      width: '100%'
  },
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  cardBody: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    padding: '15px 10px'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.1rem'
  },
  authors: {
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
  },
  authorsBody: {
    padding: '15px 10px'
  }
};