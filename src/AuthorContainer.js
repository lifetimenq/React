import React from 'react';

import AuthorsList from './AuthorsList';

class AuthorContainer extends React.Component {
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
          <AuthorsList authors={Authors.slice(0, 3)} /> :
          <AuthorsList authors={Authors} />
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

export default AuthorContainer;

const styles = {
  authors: {
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
  }
};