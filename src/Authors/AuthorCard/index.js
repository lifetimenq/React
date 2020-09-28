import React from 'react';
import styles from './AuthorCard.module.css';

const AuthorCard = React.memo(({ author }) => (
  <Card>
    <Image author={author}/>
    <Info author={author} />
  </Card>
));

export default AuthorCard;

const Card = ({ children }) => (
  <div className='container'>
    {children}
  </div>
);

const Image = ({author}) => (
  <div className='imageBox'>
    <img className='image' src={author.Avatar} alt={author.Name} />
  </div>
);

const Info = ({author}) => (
  <div className='cardBody'>
    <div className='title'>{author.Name}</div>
    <div>e-mail: {author.Email}</div>
    <div>Информация об авторе: <span>{author.Info}</span></div>
  </div>
);

