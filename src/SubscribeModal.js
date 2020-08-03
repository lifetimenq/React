import React from 'react';

import ReactDOM from 'react-dom';

class SubscribeModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <>
      <div style={style.button}>
        <button onClick={() => {
          this.toggle();}}>Информация о подписке</button>
        </div>
        {
          this.state.isOpen && ReactDOM.createPortal(
            <div style={style.overlay}>
              <div style={style.body}>
                При подписке на книгу, вы получите:
                <ul>
                  <li>100р Афтограф автора.</li>
                  <li>200р + Шарф с логотипом x-com</li>
                  <li>500р + диск с мультфильмом "черепашки ниндзя".</li>
                </ul> 
                <button onClick={() => this.toggle()}>Закрыть</button>        
              </div>
            </div>,
            document.getElementById('modal-root')
          )
        }
      </>
    )
  }
}

export default SubscribeModal;

const style = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    backgroundColor: '#fff',
    padding: '20px'
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '20px'
  }
}