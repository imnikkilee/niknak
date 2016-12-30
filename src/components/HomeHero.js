import React, {Component} from 'react';

// Components
import Container from './Container';
import Logo from './Logo';

// Styles
import './HomeHero.scss';

class HomeHero extends Component {
  render() {
    return (
      <Container size={'fullWidth'} className='HomeHero'>
        <Container size={'maxWidth'} className='innerContainer'>
          <h1 className='headline'>
            <Logo className='headlineLogo'/> is a super cool little design studio
          </h1>
        </Container>
      </Container>
    )
  }
}

export default HomeHero;
