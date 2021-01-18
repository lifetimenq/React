import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../../../Layout';
import BookCard from '../../../Shared/BookCard';
import { useBook } from '../../../hooks/useBooks';
import BackButton from '../../../Shared/BackButton';


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
