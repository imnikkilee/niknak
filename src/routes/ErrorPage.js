import React, {Component} from 'react';

// Components
import Container from '../components/Container';
import Footer from '../components/Footer';
import FooterCta from '../components/FooterCta';
import BlankHero from '../components/BlankHero';
import WorkGrid from '../components/WorkGrid';
import {Link} from 'react-router';

// Styles
import './ErrorPage.scss';

class ErrorPage extends Component {
  render() {
    return (
      <div className='ErrorPage _stickyFooterPage'>
        <div className='_stickyFooterWrapper'>
          <BlankHero className='opt2' />
          <Container size={'fullWidth'} className='errorContent'>
            <Container size={'maxWidth'} className='errorInnerContainer'>
              <h2 className='errorHeadline'>Whoops, we couldn't find the page you were looking for.</h2>
              <Link to='/' className='errorHomeButton'>go home</Link>
            </Container>
          </Container>
        </div>
        <Footer />
      </div>
    )
  }
}

export default ErrorPage;
