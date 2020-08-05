import React from 'react';

import BooksList from './BooksList';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import SubscribeModal from './SubscribeModal';

class App extends React.Component {
    render() {
        return (
            <>
                <Header>cf-Book</Header>
                <Main>
                    <SubscribeModal />
                    <BooksList books={this.props.books} />
                </Main>
                <Footer>&copy; {new Date().getFullYear()}, X-com</Footer>
            </>
        );
    }
}

export default App;
