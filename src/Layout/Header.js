import React from 'react';
import { Link } from 'react-router-dom';

import UserInfo from '../Shared/UserInfo';

import styles from './Layout.module.css';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.headerContainer}>
        <div className={styles.header}><Link to={'/'}>{this.props.children}</Link></div>
        <UserInfo />
      </header>)
  }
}

export default Header;
