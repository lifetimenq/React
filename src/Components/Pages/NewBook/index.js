import React from 'react';

import Layout from '../../../Layout';

import style from './NewBook.module.css';

const NewBook = () => {

  return (
    <Layout>
      Страница создания книги
      <form className={style.form}>
        <Field name='Title' label='Название книги' />
        <Field name='Description' label='Описание' componentType='textarea' />
        <Field name='NumbersOfPage' label='Количество страниц' type='number' />
        <Field name='Progress' label='Прогресс (в %)' type='number' />
        <Field name='Language' label='Язык' />
        <Field name='MinimumPrice' label='Минимальная цена' type='number' />
        <Field name='SuggestedPrice' label='Желаемая цена' type='number' />
        <Field name='ExpectedAmount' label='Ожидаемая сумма' type='number' />
        <label>Автор</label>
        <select name='Author'>
          <option>Nicola Tesla</option>
        </select>
        <button>Добавить книгу</button>
      </form>
    </Layout>
  );
}

export default NewBook;

const Field = ({ componentType, label, ...props }) => {
  const Component = componentType === 'textarea' ? 'textarea' : 'input';
  const formStyle = componentType === 'textarea' ? style.formText : style.formInput;
  console.log(props);
  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <Component className={formStyle} {...props} />
    </div>
  );
}