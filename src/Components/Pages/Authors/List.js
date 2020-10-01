import React from 'react';

import withLoader from '../../../HOC/withLoader';
import AuthorCard from './AuthorCard';

class List extends React.Component {
  
  render() {
    let { authors } = this.props;
    if(authors != null && authors.length > 3 && !this.props.test) {
      authors = authors.slice(0, 3);
    }
    return (
    <>
    { 
      authors.map(author => (
        <div key={author.Id}>
          <AuthorCard author={author} />
        </div>
      ))
    }
    </>
    )
  }
}

export default withLoader(List);