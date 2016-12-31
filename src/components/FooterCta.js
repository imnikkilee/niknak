import React, {Component} from 'react';

// Components
import Container from './Container';

// Styles
import './FooterCta.scss';

class FooterCta extends Component {
  render() {
    return (
      <Container size={'fullWidth'} className='FooterCta'>
        <Container size={'maxWidth'} className='innerContainer'>
        </Container>
      </Container>
    )
  }
}

export default FooterCta;
