import React from 'react';

import AuthorCard from './AuthorCard';

class AuthorsList extends React.Component {
  render() {
    return (
      <div style={style.authorsBody}>
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

const style = {
  authorsBody: {
    padding: '15px 10px'
  },
}