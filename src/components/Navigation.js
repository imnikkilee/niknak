import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router';

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
            <IndexLink to='/' className='navLogoLink'>
              <Logo className='navLogo'/>
            </IndexLink>
            <ul className='navList'>
              <li className='navListItem'>
                <IndexLink
                  to='/'
                  className='navLink'
                  activeClassName='active'>
                  about
                </IndexLink>
              </li>
              <li className='navListItem'>
                <Link
                  to='/how-we-do-it'
                  className='navLink'
                  activeClassName='active'>
                  process
                </Link>
              </li>
              <li className='navListItem'>
                <a
                  href='https://www.etsy.com/shop/niknakdsgn'
                  target='_blank'
                  className='navLink'>
                  shop
                </a>
              </li>
              <li className='navListItem'>
                <Link
                  to='/contact-us'
                  className='navLink navButton'
                  activeClassName='active'>
                  contact us
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </Container>
    )
  }
}

export default Navigation;
