import React from 'react';

import Layout from '../../../Layout';
import { useForm } from 'react-hook-form';

import style from './NewBook.module.css';
import { createBook } from '../../../lib/client';
const NewBook = () => {

  const { register, handleSubmit } = useForm();

  const onSubmit = (fields) => {
    fields = {
      ...fields,
      Active: true
    }
    return createBook(fields).then((res) => {
      console.log(res);
      return res;
    })
  };

  return (
    <Layout>
      <h1>Добавление новой книги</h1>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <Field name='Title' label='Название книги' register={register} />
        <Field name='Description' label='Описание' componentType='textarea' register={register} />
        <Field name='NumbersOfPage' label='Количество страниц' register={register} />
        <Field name='Progress' label='Прогресс (в %)' type='number' register={register} />
        <Field name='Language' label='Язык' register={register} />
        <Field name='MinimumPrice' label='Минимальная цена' type='number' register={register} />
        <Field name='SuggestedPrice' label='Желаемая цена' type='number' register={register} />
        <Field name='ExpectedAmount' label='Ожидаемая сумма' type='number' register={register} />
        <Field name='Cover[0].url' label='Обложка' register={register} />
        <label className={style.formLabelText}>Автор</label>
        <select className={style.formSelect} name='Authors[0]'  ref={register} >
          <option value='rec75gJHgN3odIiK2'>Werner Karl Heisenberg</option>
        </select>
        <button className={style.formButton}>Добавить книгу</button>
      </form>
    </Layout>
  );
}

export default NewBook;

const Field = ({ componentType, label, register, ...props }) => {
  const Component = componentType === 'textarea' ? 'textarea' : 'input';
  const formStyle = componentType === 'textarea' ? style.formText : style.formInput;

  return (
    <div>
      <label className={style.formLabelText} htmlFor={props.name}>{label}</label>
      <Component ref={register} className={formStyle} {...props} />
    </div>
  );
}