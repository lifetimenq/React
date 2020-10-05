import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../../../Layout';
import BookCard from '../../../Shared/BookCard';
import { useBook } from '../../../hooks/useBooks';
import { useHistory } from 'react-router';

const Book = ({ match : { params } }) => {
  const book = useBook(params.id);
  
  return (
    <Layout>
      <Helmet>
        <title>{book ? `cf-Book - ${book.Title}` : `Загрузка...`}</title>
      </Helmet>
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