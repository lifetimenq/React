import React from 'react';

class SubscribeButton extends React.Component {
  render() {
    return (
      <div>
          <button>{this.props.children}</button>
      </div>
    )
  }
}

export default SubscribeButton;