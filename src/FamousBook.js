import React from 'react';

class FamousBook extends React.Component {
  render() {
    return (
      <>
      {
        this.props.subscribers > 20 &&
        <div><i>{this.props.children}</i></div>
      }
      </>
    )
  }
}

export default FamousBook;