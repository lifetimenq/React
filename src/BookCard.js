import React from 'react';

class BookCard extends React.Component {
    render() {
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
            <div>
                <div>Название: {Title}</div>
                <div>Краткое описание: {Description}</div>
                <div>Количество страниц: {NumbersOfPage}</div>
                <div>Язык: {Language}</div>
                <div>Процент прогресса: {Progress}%</div>
                <div>Автор : {Name}</div>
                <div><img src={Cover}></img></div>
                <div>Минимальная цена: {MinimumPrice} руб.</div>
                <div>Желаемая цена: {SuggestedPrice} руб.</div>
                <div>Собранная сумма: {CollectedAmount} руб.</div>
                <div>Ожидаемая сумма: {ExpectedAmount} руб.</div>
            </div>
        );
    }
}

export default BookCard;