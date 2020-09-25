import React from 'react';
import List from './List';

import axios from 'axios';

import './index.css';

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
      authors: []
    };
  }

  toggleAllAuthorsShow() {
    this.setState({ allAuthorsShow: !this.state.allAuthorsShow});
  }

  componentDidMount() {
    this._fetchData(`Authors/`);
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
  
  _fetchData(url) {
    const params = {
      filterByFormula: `FIND(RECORD_ID(),'${this.props.authors.toString()}')`
    }
    httpClient.get(
      `/${url}`,
      {
        params: params
      }
    )
    .then(result => result.data)
    .then(this._mapFromAirtable)
    .then(authors => {
      this.setState({
        authors
      })
    });
  }

  render() {
    const {authors} = this.state;
    return (
      <div className='authors'>
        <List isLoading={!authors.length} test={this.state.allAuthorsShow} authors={authors} />
        {
          authors.length > 3 && 
          <div>
            <button onClick={this.toggleAllAuthorsShow}>
              toggle authors {authors.length}
            </button>
          </div>
        }
      </div>
    )
  }
}

export default Container;
