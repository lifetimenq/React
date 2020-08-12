import React from 'react';
import SubscribeModal from './SubscribeModal';

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