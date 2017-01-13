import React, {Component} from 'react';
import {Link} from 'react-router';

// Components
import Container from './Container';
import Logo from './Logo';

// Styles
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className='Footer'>
        <Container size={'fullWidth'}>
          <Container size={'maxWidth'} className='innerContainer'>
            <Logo className='logo'/>
            <p className='tagline'>a super cool little design studio</p>
            <ul className='navList'>
              <li className='navListItem'>
                <Link
                  to='/'
                  className='navLink'>
                  what we do
                </Link>
              </li>
              <li className='navListItem'>
                <Link
                  to='/how-we-do-it'
                  className='navLink'>
                  how we do it
                </Link>
              </li>
              <li className='navListItem'>
                <Link
                  to='/contact-us'
                  className='navLink navButton'>
                  contact us
                </Link>
              </li>
            </ul>
            <small className='copyright'>
              made with love, magic, and beer in MKE
              <br/>&copy; niknak 2017 ayyyyy
            </small>
          </Container>
        </Container>
      </footer>
    )
  }
}

export default Footer;
