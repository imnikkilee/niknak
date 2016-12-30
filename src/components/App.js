import React, {Component} from 'react';

// Components
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
      </div>
    )
  }
}

export default App;
