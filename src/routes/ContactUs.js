import React, {Component} from 'react';

// Components
import BlankHero from '../components/BlankHero';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

class ContactUs extends Component {
  render() {
    return (
      <div className='_stickyFooterPage'>
        <div className='_stickyFooterWrapper'>
          <BlankHero className='opt3' />
          <ContactForm />
        </div>
        <Footer />
      </div>
    )
  }
}

export default ContactUs;
