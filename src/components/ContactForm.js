import React, {Component} from 'react';
import $ from 'jquery'; 

// Components
import Container from './Container';

// Styles
import './ContactForm.scss';

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleChange = (e) => {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  handleSubmit = (e, message) => {
    e.preventDefault();
    let formData = {
      formName: this.state.name,
      formEmail: this.state.email,
      formMessage: this.state.message
    }
    if (formData.formName.length < 1 || formData.formEmail.length < 1 || formData.formMessage.length < 1) {
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
              <input id='formName' className='form-input' type='text' name='name' onChange={this.handleChange} value={this.state.name}/>
            </p>
            <p>
              <label htmlFor='formEmail'>email</label>
              <input id='formEmail' className='form-input' type='text' name='email' onChange={this.handleChange} value={this.state.email}/>
            </p>
            <p>
              <label htmlFor='formMessage'>message</label>
              <textarea id='formMessage' className='form-input' name='message' rows='5' placeholder='Include information like project description, deadline, and budget to jumpstart your project.' onChange={this.handleChange} value={this.state.message}></textarea>
            </p>
            <button className='submitButton' type='submit'>send!</button>
          </form>
        </Container>
      </Container>
    )
  }
}

export default ContactForm;
