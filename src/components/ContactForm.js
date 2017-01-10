import React, {Component} from 'react';

// Components
import Container from './Container';

// Styles
import './ContactForm.scss';

class ContactForm extends Component {
  render() {
    return (
      <Container size='fullWidth' className='ContactForm'>
        <Container size='maxWidth' className='innerContainer'>
          <h2 className='contactHeadline'>
            We’d love to hear from you! Let us know what’s on your mind.
          </h2>
          <form name='contact' netlify>
            <p>
              <label>name</label>
              <input type='text' name='name' />
            </p>
            <p>
              <label>email</label>
              <input type='text' name='email' />
            </p>
            <p>
              <label>name</label>
              <textarea name='message' placeholder='Include information like project description, deadline, and budget to jumpstart your project.'></textarea>
            </p>
            <p>
              <button>send!</button>
            </p>
          </form>
        </Container>
      </Container>
    )
  }
}

export default ContactForm;
