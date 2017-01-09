import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

// Components
import Container from './Container';
import Logo from './Logo';

// Styles
import './Navigation.scss';

class Navigation extends Component {
  static propTypes = {
    current: PropTypes.string.isRequired,
    floating: PropTypes.bool
  }

  static defaultProps = {
    floating: false
  }

  constructor(props) {
    super(props);
    this.state = {showContactForm: false};
    this.closeContactForm = this.closeContactForm.bind(this);
    this.openContactForm = this.openContactForm.bind(this);
  }

  closeContactForm(e) {
    e.preventDefault();
    this.setState({
      showContactForm: false
    });
  }

  openContactForm(e) {
    e.preventDefault();
    this.setState({
      showContactForm: true
    });
  }

  render() {

    const {showContactForm} = this.state;
    const {current, floating} = this.props;

    return (
        <Container size={'fullWidth'} className={classnames('Navigation', {['floating']: floating})}>
          {(() => {
            if (showContactForm) {
              return (
                <div className='contactForm'>
                  <Container size={'maxWidth'}>
                  </Container>
                </div>
              );
            }
          })()}
          <Container size={'maxWidth'}>
            <nav>
              <Link to='/'>
                <Logo className='navLogo'/>
              </Link>
              <ul className='navLinks'>
                <li className={classnames('navLink', {['current']: current === 'what-we-do'})}>
                  <Link to='/'>what we do</Link>
                </li>
                <li className={classnames('navLink', {['current']: current === 'how-we-do-it'})}>
                  <Link to='/how-we-do-it'>how we do it</Link>
                </li>
                <li className='navContactButton' onClick={this.openContactForm}>
                  contact us
                </li>
              </ul>
            </nav>
          </Container>
        </Container>
    )
  }
}

export default Navigation;
