import React, {Component} from 'react';
import $ from 'jquery';
import validator from 'validator';

// Components
import Container from './Container';

// Styles
import './ContactForm.scss';

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameError: false,
      email: '',
      emailError: false,
      message: '',
      messageError: false
    }
  }

  handleNameChange = (e) => {
    if (e.target.value.length < 1) {
      this.setState({
        nameError: true,
        name: e.target.value
      });
    } else {
      this.setState({
        nameError: false,
        name: e.target.value
      });
    }
  }

  handleEmailChange = (e) => {
    if (!validator.isEmail(e.target.value)) {
      this.setState({
        emailError: true,
        email: e.target.value
      });
    } else {
      this.setState({
        emailError: false,
        email: e.target.value
      });
    }
  }

  handleMessageChange = (e) => {
    if (e.target.value.length < 1) {
      this.setState({
        messageError: true,
        message: e.target.value
      });
    } else {
      this.setState({
        messageError: false,
        message: e.target.value
      });
    }
  }

  handleSubmit = (e, message) => {
    e.preventDefault();
    let formData = {
      formName: this.state.name,
      formEmail: this.state.email,
      formMessage: this.state.message
    }
    if (formData.formName.length < 1) {
      this.setState({
        nameError: true
      });
    }
    if (formData.formEmail.length < 1 || !validator.isEmail(formData.formEmail)) {
      this.setState({
        emailError: true
      });
    }
    if (formData.formMessage.length < 1) {
      this.setState({
        messageError: true
      });
    }
    if (this.state.nameError || this.state.emailError || this.state.messageError) {
      return false;
    }
    $.ajax({
      url: 'https://formspree.io/hello@niknak.design',
      type: 'POST',
      data: formData,
      success: function(data) {
        if (confirm('Thank you for your message. Can I erase the form?')) {
         document.querySelector('.form-input').val('');
        }
       },
       error: function(xhr, status, err) {
        console.error(status, err.toString());
        alert('There was some problem with sending your message.');
       }
     });
     this.setState({
      name: '',
      email: '',
      message: ''
     });
  };

  render() {
    return (
      <Container size='fullWidth' className='ContactForm'>
        <Container size='maxWidth' className='innerContainer'>
          <h2 className='contactHeadline'>
            We're excited to hear from you! Let us know what’s on your mind.
          </h2>
          <form name='contact' onSubmit={this.handleSubmit} className='contactFormBody'>
            <p>
              <label htmlFor='formName'>name</label>
              <input id='formName' className='form-input' type='name' name='name' onChange={this.handleNameChange} value={this.state.name}/>
            </p>
            <p>
              <label htmlFor='formEmail'>email</label>
              <input id='formEmail' className='form-input' type='text' name='email' onChange={this.handleEmailChange} value={this.state.email}/>
            </p>
            <p>
              <label htmlFor='formMessage'>message</label>
              <textarea id='formMessage' className='form-input' name='message' rows='5' placeholder='Include information like project description, deadline, and budget to jumpstart your project.' onChange={this.handleMessageChange} value={this.state.message}></textarea>
            </p>
            <button
              className='submitButton'
              type='submit'>
              send!
            </button>
          </form>
        </Container>
      </Container>
    )
  }
}

export default ContactForm;
