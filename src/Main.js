import React from 'react';

class Main extends React.Component {
  render() {
    return <main style={style.main}>{this.props.children}</main>
  }
}

export default Main;

const style = {
  main: {
      padding: '10px 10%'
  } 
}