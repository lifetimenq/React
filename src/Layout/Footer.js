import React from 'react';

class Footer extends React.Component {
  render() {
    return <footer style={style.footer}>{this.props.children}</footer>
  }
}

export default Footer;

const style = {
  footer: {
      padding: '0 10%',
      marginTop: '50px'
  } 
}