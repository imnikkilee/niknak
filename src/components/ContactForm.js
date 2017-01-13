import React, {Component} from 'react';
import $ from 'jquery';
import classnames from 'classnames';
import validator from 'validator';

// Components
import Container from './Container';

// Styles
import './ContactForm.scss';

function isValidLength(value) {
  return value.length >= 1;
}

function isValidEmail(value) {
  return value.length >= 1 && validator.isEmail(value);
}

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameError: false,
      email: '',
      emailError: false,
      emailBlurred: false,
      message: '',
      messageError: false
    }
  }

  handleNameChange = (e) => {
    if (!isValidLength(e.target.value)) {
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

  handleEmailBlur = (e) => {
    if (!isValidEmail(e.target.value)) {
      this.setState({
        emailBlurred: true,
        emailError: true,
        email: e.target.value
      });
    } else {
      this.setState({
        emailBlurred: true,
        emailError: false,
        email: e.target.value
      });
    }
  }

  handleEmailChange = (e) => {
    if (this.state.emailBlurred) {
      if (!isValidEmail(e.target.value)) {
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
    } else {
      this.setState({
        emailError: false,
        email: e.target.value
      });
    }
  }

  handleMessageChange = (e) => {
    if (!isValidLength(e.target.value)) {
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
    let error = false;
    if (!isValidLength(formData.formName)) {
      error = true;
      this.setState({
        nameError: true
      });
    }
    if (!isValidEmail(formData.formEmail)) {
      error = true;
      this.setState({
        emailError: true
      });
    }
    if (!isValidLength(formData.formMessage)) {
      error = true;
      this.setState({
        messageError: true
      });
    }
    if (error) {
      return false;
    }
    $.ajax({
      url: 'https://formspree.io/hello@niknak.design',
      type: 'POST',
      data: formData,
      dataType: 'json',
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

    const {
      name,
      nameError,
      email,
      emailError,
      emailBlurred,
      message,
      messageError
    } = this.state;

    return (
      <Container size='fullWidth' className='ContactForm'>
        <Container size='maxWidth' className='innerContainer'>
          <h2 className='contactHeadline'>
            We're excited to hear from you! Let us know what’s on your mind.
          </h2>
          <form
            name='contact'
            onSubmit={this.handleSubmit}
            className='contactFormBody' >
            <p>
              <label htmlFor='formName'>name</label>
              <input
                id='formName'
                className={classnames(['form-input', nameError: 'error'])}
                type='text'
                name='name'
                onChange={this.handleNameChange}
                onBlur={this.handleNameChange}
                value={name} />
              {(() => {
                if (nameError) {
                  return (
                    <span className='formError'>
                      please include your name
                    </span>
                  );
                }
              })()}
            </p>
            <p>
              <label htmlFor='formEmail'>email</label>
              <input
                id='formEmail'
                className='form-input'
                type='text'
                name='email'
                onChange={this.handleEmailChange}
                onBlur={this.handleEmailBlur}
                value={email} />
              {(() => {
                if (emailError) {
                  return (
                    <span className='formError'>
                      please include a valid email
                    </span>
                  );
                }
              })()}
            </p>
            <p>
              <label htmlFor='formMessage'>message</label>
              <textarea
                id='formMessage'
                className='form-input'
                name='message'
                rows='5'
                placeholder='A description of the project you have in mind would be awesome here.'
                onChange={this.handleMessageChange}
                onBlur={this.handleMessageChange}
                value={message} >
              </textarea>
              {(() => {
                if (messageError) {
                  return (
                    <span className='formError'>
                      please include a message
                    </span>
                  );
                }
              })()}
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
