import React from 'react';
import Layout from '../../../Layout';
import BackButton from '../../../Shared/BackButton';

const Contacts = () => {
  return (
    <Layout>
      <BackButton />
      <div>
        <h2>Контакты</h2>
        <div>
          почта: <span>cf-book@mail.com</span>
        </div>
      </div>
    </Layout>
  )
}

export default Contacts;