import React from 'react';

import AuthorCard from './AuthorCard';

class AuthorsList extends React.Component {
  render() {
    console.log(this);
    return (
      <div>
        {
          this.props.authors
          .map(author => (
            <div key={author.Id}>
              <AuthorCard author={author} />
            </div>
          ))
        }
      </div>
    )
  }
}

export default AuthorsList;