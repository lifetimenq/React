import React from 'react';
import axios from 'axios';

const API_TOKEN = 'keyG0c7aAoXmpprjM';
const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appFnjL5yWDtdrvV6',
  timeout: 1000,
  headers: {
    'Authorization' : `Bearer ${API_TOKEN}`
  }
});

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.toggleAllAuthorsShow = this.toggleAllAuthorsShow.bind(this);
    this.state = { 
      allAuthorsShow: false,
      authors: null 
    };
  }

  toggleAllAuthorsShow() {
    this.setState({ allAuthorsShow: !this.state.allAuthorsShow});
  }

  componentDidMount() {
    this._fetchData('Authors');
  }

  _mapFromAirtable(data) {
    return data.records.map(author => ({
      Id: author.id,
      Name: author.fields.Name,
      Email: author.fields.Email ? author.fields.Email : '',
      Avatar: author.fields.Avatar ? author.fields.Avatar[0].thumbnails.full.url : '',
      Info: author.fields.Info ? author.fields.Info : '',
    }));
  }
  
  _fetchData(table) {

    httpClient.get(
      `/${table}`,
    )
    .then(result => result.data)
    .then(this._mapFromAirtable)
    .then(authors => {
      this.setState({
        authors
      })
    })
  }

  render() {
    const authors = this.state.authors;
    console.log(authors);
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