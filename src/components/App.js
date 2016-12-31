import React, {Component} from 'react';

// Components
import FooterCta from './FooterCta';
import HomeHero from './HomeHero';
import Navigation from './Navigation';
import WorkGrid from './WorkGrid';

// Styles
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation/>
        <HomeHero/>
        <WorkGrid/>
        <FooterCta/>
      </div>
    )
  }
}

export default App;
