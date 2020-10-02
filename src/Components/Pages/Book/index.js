import React from 'react';

import Layout from '../../../Layout';
import BookCard from '../../../Shared/BookCard';
import { useBook } from '../../../hooks/useBooks';
import { useHistory } from 'react-router';

const Book = ({ match : { params } }) => {
  const book = useBook(params.id);
  
  return (
    <Layout>
      <BackButton />
      { book ?
        <BookCard book={book} />
        : <div>Загрузка...</div>
      }
      
    </Layout>
  );
}

export default Book;  

const BackButton = () => {
  const history = useHistory();

  const goBack = () => {
    if (history.action === 'PUSH')
      history.goBack();
    else
      history.push('/');
  };

  return (
    <button onClick={goBack}>
      Вернуться назад
    </button>
  );
}