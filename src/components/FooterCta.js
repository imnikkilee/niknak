import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

// Components
import Container from './Container';

// Styles
import './FooterCta.scss';

class FooterCta extends Component {

  static propTypes = {
    displayWhatWeDo: PropTypes.bool.isRequired,
    displayHowWeDoIt: PropTypes.bool.isRequired,
    displayContactUs: PropTypes.bool.isRequired
  }

  static defaultProps = {
    displayWhatWeDo: false,
    displayHowWeDoIt: false,
    displayContactUs: false
  }

  render() {

    const {
      displayWhatWeDo,
      displayHowWeDoIt,
      displayContactUs
    } = this.props;

    const whatWeDo = (
      <div className='whatWeDoCTA'>
        <h2>Wanna see the sorts of things we like to make?</h2>
        <Link to='/' className='CTAbutton'>take a look</Link>
      </div>
    );

    const howWeDoIt = (
      <div className='howWeDoItCTA'>
        <h2>Wondering how we do the things we do?</h2>
        <Link to='/how-we-do-it' className='CTAbutton'>find out</Link>
      </div>
    );

    const contactUs = (
      <div className='contactUsCTA'>
        <h2>Want us to make you something totally rad?</h2>
        <Link to='/contact-us' className='CTAbutton'>contact us</Link>
      </div>
    );

    return (
      <Container size={'fullWidth'} className='FooterCta'>
        <Container size={'maxWidth'} className='innerContainer'>
          {displayWhatWeDo && whatWeDo}
          {displayHowWeDoIt && howWeDoIt}
          {displayContactUs && contactUs}
        </Container>
      </Container>
    )
  }
}

export default FooterCta;
