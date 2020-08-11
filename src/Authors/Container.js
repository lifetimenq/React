import React from 'react';

import List from './List';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.toggleAllAuthorsShow = this.toggleAllAuthorsShow.bind(this);
    this.state = { allAuthorsShow: false };
  }

  toggleAllAuthorsShow() {
    this.setState({ allAuthorsShow: !this.state.allAuthorsShow});
  }

  render() {
    const Authors = this.props.authors;
    return (
      <div style={styles.authors}>
        {
          (Authors.length > 3 && !this.state.allAuthorsShow) ?
          <List authors={Authors.slice(0, 3)} /> :
          <List authors={Authors} />
        }
        {
          Authors.length > 3 && 
          <div>
            <button onClick={this.toggleAllAuthorsShow}>
              toggle authors {Authors.length}
            </button>
          </div>
        }
      </div>
    )
  }
}

export default Container;

const styles = {
  authors: {
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
  }
};