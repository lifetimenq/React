import React from 'react';

import styles from './FeedbackForm.module.css';

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
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <div className={styles.formTitle}><h2>Форма обратной связи</h2></div>
          <div className={styles.formInputs}>
          <div>
            <label>Имя</label>
            <input type='text' 
                   className={styles.formInput}
                   value={name}
                   onChange={this.handleNameChange}
            />
            <label>e-mail</label>
            <input type='email' 
                   className={styles.formInput}
                   value={email}
                   onChange={this.handleEmailChange}  
            />
          </div>
          <div>
            <div className={styles.formLabelText}><label>Вопрос автору</label></div>
            <textarea className={styles.formText}
                      value={question}
                      onChange={this.handleQuestionChange} 
            />
          </div>
          </div>
          <div>
            <button className={styles.formButton}>Отправить</button>
          </div>
        </form>
      </div>
    )
  }
}

export default FeedbackForm;
