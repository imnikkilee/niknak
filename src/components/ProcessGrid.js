import React, {Component} from 'react';

// Components
import Container from './Container';

// Styles
import './ProcessGrid.scss';

class ProcessGrid extends Component {
  render() {
    return (
      <Container size='fullWidth' className='ProcessGrid'>
        <Container size='maxWidth' className='innerContainer'>
          <h2 className='gridHeadline'>
            Our inspiration is you. We love to create awesome things for awesome people.
          </h2>
        </Container>
      </Container>
    )
  }
}

export default ProcessGrid;
