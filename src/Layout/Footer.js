import React from 'react';

import styles from './Layout.module.css';

class Footer extends React.Component {
  render() {
    return <footer className={styles.footer}>{this.props.children}</footer>
  }
}

export default Footer;
