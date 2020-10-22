import React from 'react';

import Header from './Header.js';
import Footer from './Footer.js';
import MainBody from './MainBody.js';
import SubscribeModal from '../Shared/SubscribeModal';

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header>cf-Book</Header>
        <MainBody>
          <SubscribeModal />
          {this.props.children}
        </MainBody>
        <Footer>&copy; {new Date().getFullYear()}, X-com</Footer>
      </>
    );
  }
}

export default Layout;