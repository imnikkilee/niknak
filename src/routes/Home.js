import React, {Component} from 'react';

// Components
import Footer from '../components/Footer';
import FooterCta from '../components/FooterCta';
import HomeHero from '../components/HomeHero';
import WorkGrid from '../components/WorkGrid';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeHero/>
        <WorkGrid/>
        <FooterCta displayHowWeDoIt displayContactUs/>
        <Footer/>
      </div>
    )
  }
}

export default Home;
