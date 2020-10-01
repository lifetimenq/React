import React from 'react';

import Header from './Header.js';
import Footer from './Footer.js';
import MainBody from './Main.js';
import SubscribeModal from '../Shared/SubscribeModal';
import FeedbackForm from '../Shared/FeedbackForm';

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header>cf-Book</Header>
        <MainBody>
          <SubscribeModal />
          {this.props.children}
          <FeedbackForm />
        </MainBody>
        <Footer>&copy; {new Date().getFullYear()}, X-com</Footer>
      </>
    );
  }
}

export default Layout;