import React, {Component} from 'react';

// Components
import FooterCta from '../components/FooterCta';
import HomeHero from '../components/HomeHero';
import Navigation from '../components/Navigation';
import WorkGrid from '../components/WorkGrid';

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation current='what-we-do' floating/>
        <HomeHero/>
        <WorkGrid/>
        <FooterCta/>
      </div>
    )
  }
}

export default Home;
