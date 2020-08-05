import React from 'react';

class Header extends React.Component {
  render() {
    return <header style={style.header}>{this.props.children}</header>
  }
}

export default Header;


const style = {
  header: {
      backgroundColor: '#2b6980',
      color: '#fff',
      minHeight: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.2rem',
      fontWeight: 'bold'
  } 
}