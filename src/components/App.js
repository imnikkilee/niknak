import React, {Component} from 'react';

// Components
import HomeHero from './HomeHero';
import Navigation from './Navigation';

// Styles
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation/>
        <HomeHero/>
      </div>
    )
  }
}

export default App;
