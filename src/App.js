import React from 'react';

import BooksList from './BooksList';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (
            <>
            <Header>cf-Book</Header>
            <main style={style.main}>
                <BooksList books={this.props.books} />
            </main>
            <Footer>&copy; {new Date().getFullYear()}, X-com</Footer>
            </>
        );
    }
}

export default App;

const style = {
    main: {
        padding: '10px 10%'
    } 
}