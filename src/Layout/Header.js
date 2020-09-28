import React from 'react';
import UserInfo from '../Shared/UserInfo';

import styles from './Layout.module.css';

class Header extends React.Component {
  render() {
    return (
      <header className='headerContainer'>
        <div className='header'>{this.props.children}</div>
        <UserInfo />
      </header>)
  }
}

export default Header;
