import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Layout from '../../../Layout';

const NotFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      Ничего не найдено {' '}
      <Link to={'/'}>Вернуться назад</Link>
    </Layout>
  );
};

export default NotFound;