import React, { useContext } from 'react'
import AuthContext from '../../AuthContext';

import styles from './UserInfo.module.css';

const UserInfo = () => {
  const { firstName, lastName, avatarUrl } = useContext(AuthContext);
  return (
    <div className='userInfoContainer'>
      <div className='imageBox'>
        <img className='image' src={avatarUrl} alt={firstName} />
      </div>
      <div className='title'>
        <span>{firstName} {lastName}</span>
      </div>
    </div>
  );
}

export default UserInfo;

const style = {
  imageBox: {
    maxWidth: '50px'
  },
  image: {
    width: '100%'
  },
  title: {
    paddingLeft: 10,
    fontWeight: 'bold',
    fontSize: '1.1rem'
  },
  userInfoContainer: {
    width: '10%',
    display: 'flex',
    alignItems: 'center'
  }
};