import React from 'react';

class AuthorCard extends React.Component {
    render() {
        const { book : {
            Author: {
                Name,
                Email,
                Avatar,
                Info
            }
        }} = this.props;

        return (
            <div>
                <div>Имя: {Name}</div>
                <div>e-mail: {Email}</div>
                <div><img src={Avatar}></img></div>
                <div>Информация об авторе: {Info}</div>
            </div>
        );
    }
}

export default AuthorCard;