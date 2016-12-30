import React, {Component} from 'react';

// Components
import Container from './Container';

// Styles
import './HomeHero.scss';

class HomeHero extends Component {
  render() {
    return (
      <Container size={'fullWidth'} className='HomeHero'>
        <Container size={'maxWidth'}>
          niknak!
        </Container>
      </Container>
    )
  }
}

export default HomeHero;
