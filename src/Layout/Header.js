import React from 'react';
import UserInfo from '../Shared/UserInfo';

class Header extends React.Component {
  render() {
    return (
      <header style={style.headerContainer}>
        <div style={style.header} >{this.props.children}</div>
        <UserInfo />
      </header>)
  }
}

export default Header;


const style = {
  headerContainer: {
    backgroundColor: '#2b6980',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between'
  },
  header: {
    width: '90%',
    minHeight: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold'
  } 
}