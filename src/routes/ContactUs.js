import React, {Component} from 'react';

// Components
import BlankHero from '../components/BlankHero';
import FooterCta from '../components/FooterCta';

class ContactUs extends Component {
  render() {
    return (
      <div>
        <BlankHero className='opt3' />
        contact us!
        <FooterCta displayWhatWeDo displayHowWeDoIt />
      </div>
    )
  }
}

export default ContactUs;
