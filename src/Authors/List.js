import React from 'react';

import Card from './Card';

class List extends React.Component {
  render() {
    return (
      <div style={style.authorsBody}>
        {
          this.props.authors
          .map(author => (
            <div key={author.Id}>
              <Card author={author} />
            </div>
          ))
        }
      </div>
    )
  }
}

export default List;

const style = {
  authorsBody: {
    padding: '15px 10px'
  },
}