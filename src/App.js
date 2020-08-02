import React from 'react';
import BookCard from "./BookCard";
import AuthorCard from "./AuthorCard";

class App extends React.Component {
    render() {
        return (
            <>
                <header style={style.header}>
                    cf-Book
                </header>
                <main style={style.main}>
                    <BookCard book={this.props.book} />
                    <AuthorCard book={this.props.book} />
                    <div>
                        <button>Подписаться</button>
                    </div>
                </main>
                <footer style={style.footer}>
                    &copy; {new Date().getFullYear()}, X-com
                </footer>
            </>
        );
    }
}

export default App;

const style = {
    header: {
        backgroundColor: '#2b6980',
        color: '#fff',
        minHeight: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.2rem',
        fontWeight: 'bold'
    },
    main: {
        padding: '10px 10%'
    },
    footer: {
        padding: '0 10%',
        marginTop: '50px'
    }
    
}