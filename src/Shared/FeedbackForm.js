import React from 'react';

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
    return (
      <div style={style.formContainer}>
        <form style={style.form} onSubmit={this.handleSubmit}>
          <div style={style.formTitle}><h2>Форма обратной связи</h2></div>
          <div style={style.formInputs}>
          <div>
            <label>Имя</label>
            <input type='text' 
                   style={style.formInput}
                   value={this.state.name}
                   onChange={this.handleNameChange}
            />
            <label>e-mail</label>
            <input type='email' 
                   style={style.formInput}
                   value={this.state.email}
                   onChange={this.handleEmailChange}  
            />
          </div>
          <div>
            <div style={style.formLabelText}><label>Вопрос автору</label></div>
            <textarea style={style.formText}
                      value={this.state.question}
                      onChange={this.handleQuestionChange} 
            />
          </div>
          </div>
          <div>
            <button style={style.formButton}>Отправить</button>
          </div>
        </form>
      </div>
    )
  }
}

export default FeedbackForm;

const style = {
  form: {
    width: 600,
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
    border: '1px solid #d3d3d3',
    borderRadius: '5px',
  },
  formTitle: {
    color: '#2b6980'
  },
  formInput: {
    height: 30,
    fontSize: 14,
    borderRadius: '5px',
    padding: 10,
    margin: '10px 10px'
  },
  formText: { 
    width: '100%',
    height: 100,
    resize: 'none',
    borderRadius: '5px',
  },
  formLabelText: {
    marginBottom: 10
  },
  formButton: {
    height: 30,
    margin: '10px'
  },
  formContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}