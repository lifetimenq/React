import React from 'react';

import './index.css';

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      question: ''
    }
    
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  handleQuestionChange(event) {
    this.setState({
      question: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state);
  }

  render() {
    const { name, email, question } = this.state;
    return (
      <div className='formContainer'>
        <form className='form' onSubmit={this.handleSubmit}>
          <div className='formTitle'><h2>Форма обратной связи</h2></div>
          <div className='formInputs'>
          <div>
            <label>Имя</label>
            <input type='text' 
                   className='formInput'
                   value={name}
                   onChange={this.handleNameChange}
            />
            <label>e-mail</label>
            <input type='email' 
                   className='formInput'
                   value={email}
                   onChange={this.handleEmailChange}  
            />
          </div>
          <div>
            <div className='formLabelText'><label>Вопрос автору</label></div>
            <textarea className='formText'
                      value={question}
                      onChange={this.handleQuestionChange} 
            />
          </div>
          </div>
          <div>
            <button className='formButton'>Отправить</button>
          </div>
        </form>
      </div>
    )
  }
}

export default FeedbackForm;
