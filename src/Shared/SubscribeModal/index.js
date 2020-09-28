import React from 'react';

import ReactDOM from 'react-dom';

import styles from './SubscribeModal.module.css';

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
      <div className='button'>
        <button onClick={() => {
          this.toggle();}}>Информация о подписке</button>
        </div>
        {
          this.state.isOpen && ReactDOM.createPortal(
            <div className='overlay'>
              <div className='body'>
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
