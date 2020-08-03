import React from 'react';

class AuthorCard extends React.Component {
    render() {
        if (!this.props.author) {
            return <div>Empty Author</div>;
        }

        const {
            author: {
                Name,
                Email,
                Avatar,
                Info
            }
        } = this.props;

        return (
            <div style={styles.container}>
                <div style={styles.imageBox}>
                    <img style={styles.image} src={Avatar} alt={Name} />
                </div>
                <div style={styles.cardBody}>
                    <div style={styles.title}>{Name}</div>
                    <div>e-mail: {Email}</div>
                    <div>Информация об авторе: <span>{Info}</span></div>
                </div>
            </div>
        );
    }
}

export default AuthorCard;

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    imageBox: {
        maxWidth: '100px'
    },
    image: {
        width: '100%'
    },
    cardBody: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        
        padding: '15px 10px'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '1.1rem'
    }
};