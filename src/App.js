import React from 'react';
import BookCard from "./BookCard";
import AuthorCard from "./AuthorCard";

class App extends React.Component {
    render() {
        return (
            <div>
                <BookCard book={this.props.book} />
                <AuthorCard book={this.props.book} />
                <div>
                    <button>Подписаться</button>
                </div>
            </div>
        );
    }
}

export default App;