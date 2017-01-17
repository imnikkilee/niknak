import React, {Component} from 'react';

// Components
import BlankHero from '../components/BlankHero';
import Footer from '../components/Footer';
import FooterCta from '../components/FooterCta';
import ProcessGrid from '../components/ProcessGrid';

class HowWeDoIt extends Component {
  render() {
    return (
      <div className='_stickyFooterPage'>
        <div className='_stickyFooterWrapper'>
          <BlankHero className='opt3'/>
          <ProcessGrid />
          <FooterCta displayWhatWeDo displayContactUs/>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default HowWeDoIt;
