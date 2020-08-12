import React from 'react';

class Famous extends React.Component {
  render() {
    return (
      <div>
      {
        this.props.subscribers > 20 &&
        <i>{this.props.children}</i>
      }
      </div>
    )
  }
}

export default Famous;