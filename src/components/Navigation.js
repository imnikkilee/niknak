import React, {Component} from 'react';

// Components
import Container from './Container';

// Styles
import './Navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <Container size={'fullWidth'} className='Navigation'>
        <Container size={'maxWidth'}>
          <nav>
            niknak
          </nav>
        </Container>
      </Container>
    )
  }
}

export default Navigation;
