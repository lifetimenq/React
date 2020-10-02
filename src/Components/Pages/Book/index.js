import React from 'react';

import Layout from '../../../Layout';
import BookCard from '../../../Shared/BookCard';
import { useBook } from '../../../hooks/useBooks';

const Book = ({ match : { params } }) => {
  const book = useBook(params.id);
  return (
    <Layout>
      { book ?
        <BookCard book={book} />
        : <div>Загрузка...</div>
      }
      
    </Layout>
  );
}

export default Book;  