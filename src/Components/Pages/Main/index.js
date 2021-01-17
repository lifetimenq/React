import React from 'react';
import { Helmet } from 'react-helmet';
import BookContainer from '../../../Shared/Books/Container.js';
import Layout from '../../../Layout';
import FeedbackForm from '../../../Shared/FeedbackForm';

const Main = () => (
  <Layout>
    <Helmet>
      <title>cf-Book</title>
    </Helmet>
    <BookContainer />
    <FeedbackForm />
  </Layout>
);

export default Main;