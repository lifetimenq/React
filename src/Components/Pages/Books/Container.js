import React from 'react';

import List from './List';
import useBooks from '../../../hooks/useBooks';

const Container = () => {
  const books = useBooks('Books');
  return (
    <List books={books} isLoading={!books} />
  )
}

export default Container;