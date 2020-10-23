import React from 'react';

import Layout from '../../../Layout';
import { useForm } from 'react-hook-form';

import style from './NewBook.module.css';
import { createBook } from '../../../lib/client';
import { uploadFile } from '../../../lib/filestack'

import { BookPath } from '../../../helpers/BookPath';
import { useHistory } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  Title: yup.string().min(1).max(256).required(),
  Description: yup.string().min(50).max(1000).required(),
  NumbersOfPage: yup.number().positive().required(),
  Progress: yup.number().min(0).max(100).required(),
  Language: yup.string().max(100).required(),
  MinimumPrice: yup.number().positive().required(),
  SuggestedPrice: yup.number().positive().required(),
  ExpectedAmount: yup.number().positive().required(),
});

const NewBook = () => {
  const history = useHistory();
  const { register, handleSubmit, errors, formState: { isSubmitting } } = useForm({ resolver: yupResolver(schema)});

  const onSubmit = async ({ Cover, ...fields }) => {
    const formData = new FormData();
    formData.append('fileUpload', Cover[0]);
    const uploadResult = await uploadFile(formData);

    fields = {
      ...fields,
      Cover: [
        {
          url: uploadResult.url
        }
      ],
      Progress: fields.Progress / 100,
      Active: true
    };

    const result = await createBook(fields);

    const BookId = result.records[0].id;
    const redirectURI = BookPath(BookId);

    history.push(redirectURI);
  };

  return (
    <Layout>
      <h1 className={style.formContainer}>Добавление новой книги</h1>
      <div className={style.formContainer}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <Field name='Title' label='Название книги' register={register} errors={errors} />
        <Field name='Description' label='Описание' componentType='textarea' register={register} errors={errors} />
        <Field name='NumbersOfPage' label='Количество страниц' type='number' register={register} errors={errors} />
        <Field name='Progress' label='Прогресс (в %)' type='number' register={register} errors={errors} />
        <Field name='Language' label='Язык' register={register} errors={errors} />
        <Field name='MinimumPrice' label='Минимальная цена' type='number' register={register} errors={errors} />
        <Field name='SuggestedPrice' label='Желаемая цена' type='number' register={register} errors={errors} />
        <Field name='ExpectedAmount' label='Ожидаемая сумма' type='number' register={register} errors={errors} />
        <Field name='Cover' label='Загрузка обложки' type='file' register={register} errors={errors} />
        <label className={style.formLabelText}>Автор</label>
        <select className={style.formSelect} name='Authors[0]'  ref={register} errors={errors} >
          <option value='rec75gJHgN3odIiK2'>Werner Karl Heisenberg</option>
        </select>
        <button disabled={isSubmitting} className={style.formButton}>Добавить книгу</button>
      </form>
      </div>
    </Layout>
  );
}

export default NewBook;

const Field = ({ errors, componentType, label, register, ...props }) => {
  const Component = componentType === 'textarea' ? 'textarea' : 'input';
  const formStyle = componentType === 'textarea' ? style.formText : style.formInput;

  return (
    <div>
      <label className={style.formLabelText} htmlFor={props.name}>{label}</label>
      <Component ref={register} className={formStyle} {...props} />
      {errors && errors[props.name] && <p className={style.error}>{errors[props.name].message}</p>}
    </div>
  );
}