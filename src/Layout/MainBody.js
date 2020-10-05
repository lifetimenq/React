import React from 'react';

import styles from './Layout.module.css';

class MainBody extends React.Component {
  render() {
    return <main className={styles.main}>{this.props.children}</main>
  }
}

export default MainBody;
