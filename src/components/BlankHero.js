import React, {Component} from 'react';
import classnames from 'classnames';

// Components
import Container from './Container';

// Styles
import './BlankHero.scss';

class BlankHero extends Component {
  render() {

    const {className} = this.props;

    return (
      <Container size={'fullWidth'} className={classnames(['BlankHero', className])}>
      </Container>
    )
  }
}

export default BlankHero;
