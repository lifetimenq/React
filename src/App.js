import React from 'react';

import BooksList from './Books/List';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Main from './Layout/Main';
import SubscribeModal from './Shared/SubscribeModal';
import FeedbackForm from './Shared/FeedbackForm';

class App extends React.Component {

  render() {
    return (
      <>
        <Header>cf-Book</Header>
        <Main>
          <SubscribeModal />
          <BooksList />
          <FeedbackForm />
        </Main>
        <Footer>&copy; {new Date().getFullYear()}, X-com</Footer>
      </>
    );
  }
}

export default App;
