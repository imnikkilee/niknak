import React, {Component, PropTypes} from 'react';
import {IndexLink, Link} from 'react-router';
import classnames from 'classnames';

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
            <IndexLink to='/'>
              <Logo className='navLogo'/>
            </IndexLink>
            <ul className='navList'>
              <li className='navListItem'>
                <IndexLink
                  to='/'
                  className='navLink'
                  activeClassName='active'>
                  what we do
                </IndexLink>
              </li>
              <li className='navListItem'>
                <Link
                  to='/how-we-do-it'
                  className='navLink'
                  activeClassName='active'>
                  how we do it
                </Link>
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
