import React, {Component} from 'react';

// Components
import Container from './Container';
import Logo from './Logo';

// Styles
import './Navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <Container size={'fullWidth'} className='Navigation'>
        <Container size={'maxWidth'}>
          <nav>
            <Logo className='navLogo'/>
          </nav>
        </Container>
      </Container>
    )
  }
}

export default Navigation;
