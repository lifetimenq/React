import React from 'react';

class BookCard extends React.Component {
    render() {
        if (!this.props.book) {
            return <div>Empty Book</div>;
        }

        const {
            book: {
                Title,
                Description,
                NumbersOfPage,
                Language,
                Progress,
                Cover,
                Author: {Name},
                MinimumPrice,
                SuggestedPrice,
                CollectedAmount,
                ExpectedAmount
            }
        } = this.props;

        return (
            <div style={styles.container}>
                <div style={styles.imageBox}>
                    <img style={styles.image} src={Cover} alt={Title} />
                </div>
                <div style={styles.cardBody}>
                    <div style={styles.title}>{Title}</div>
                    <div>Краткое описание: {Description}</div>
                    <div>Количество страниц: {NumbersOfPage}</div>
                    <div>Язык: {Language}</div>
                    <div>Процент прогресса: {Progress}%</div>
                    <div>Автор : {Name}</div>
                    <div>Минимальная цена: {MinimumPrice} руб.</div>
                    <div>Желаемая цена: {SuggestedPrice} руб.</div>
                    <div>Собранная сумма: {CollectedAmount} руб.</div>
                    <div>Ожидаемая сумма: <span>{ExpectedAmount}</span> руб.</div>
                </div>
            </div>
        );
    }
}

export default BookCard;


const styles = {
    container: {
        display: 'flex',
        fontFamily: 'sans-serif'
    },
    imageBox: {
        maxWidth: '200px'
    },
    image: {
        width: '100%'
    },
    cardBody: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '15px 10px'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '1.1rem'
    }
};