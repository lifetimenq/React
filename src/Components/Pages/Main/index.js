import React from 'react';
import { Helmet } from 'react-helmet';
import BookContainer from '../../../Shared/Books/Container.js';
import Layout from '../../../Layout';
import { Link } from 'react-router-dom';

const Main = () => (
  <Layout>
    <Helmet>
      <title>cf-Book</title>
    </Helmet>
    <Link to={'/contacts'}><button>Контакты</button></Link>
    <h1>CF-Book App</h1>
    <BookContainer />
  </Layout>
);

export default Main;