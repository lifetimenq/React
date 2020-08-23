import React from 'react';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.toggleAllAuthorsShow = this.toggleAllAuthorsShow.bind(this);
    this.state = { allAuthorsShow: false };
  }

  toggleAllAuthorsShow() {
    this.setState({ allAuthorsShow: !this.state.allAuthorsShow});
  }

  render() {
    const Authors = this.props.authors;
    return (
      <div style={styles.authors}>
        {
          (Authors.length > 3 && !this.state.allAuthorsShow) ?
          <List authors={Authors.slice(0, 3)} /> :
          <List authors={Authors} />
        }
        {
          Authors.length > 3 && 
          <div>
            <button onClick={this.toggleAllAuthorsShow}>
              toggle authors {Authors.length}
            </button>
          </div>
        }
      </div>
    )
  }
}

export default Container;

const List = ({authors}) => (
  <div style={styles.authorsBody}>
    {
      authors
      .map(author => (
        <div key={author.Id}>
          <Card author={author} />
        </div>
      ))
    }
  </div>
);

const Card = ({ author }) => (
  <div style={styles.container}>
    <Image author={author}/>
    <Info author={author} />
  </div>
);

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
  authorsBody: {
    padding: '15px 10px'
  },
  authors: {
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
  }
};