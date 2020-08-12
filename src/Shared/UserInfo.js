import React from 'react'

import AuthContext from '../AuthContext';

class UserInfo extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {
          ({ firstName, lastName, avatarUrl }) => (
          <div style={style.userInfoContainer}>
            <div style={style.imageBox}>
              <img style={style.image} src={avatarUrl} alt={firstName} />
            </div>
            <div style={style.title}>
              <span>{firstName} {lastName}</span>
            </div>
          </div>
          )
        }
      </AuthContext.Consumer>
    )
  }
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