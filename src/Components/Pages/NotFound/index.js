import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../../Layout';

const NotFound = () => {
  return (
    <Layout>
      Ничего не найдено {' '}
      <Link to={'/'}>Вернуться назад</Link>
    </Layout>
  );
};

export default NotFound;