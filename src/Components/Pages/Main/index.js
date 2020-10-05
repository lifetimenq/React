import React from 'react';
import { Helmet } from 'react-helmet';
import BookContainer from '../../../Shared/Books/Container.js';
import Layout from '../../../Layout';

const Main = () => (
  <Layout>
    <Helmet>
      <title>cf-Book</title>
    </Helmet>
    <BookContainer />
  </Layout>
);

export default Main;