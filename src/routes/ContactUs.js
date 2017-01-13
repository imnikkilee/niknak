import React, {Component} from 'react';

// Components
import BlankHero from '../components/BlankHero';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

class ContactUs extends Component {
  render() {
    return (
      <div>
        <BlankHero className='opt3' />
        <ContactForm />
        <Footer />
      </div>
    )
  }
}

export default ContactUs;
