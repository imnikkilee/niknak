import React, {Component} from 'react';

// Components
import Navigation from './components/Navigation';

// Styles
import './styles/App.scss';

class App extends Component {
  render() {

    return (
      <div id='app'>
        <Navigation/>
        {this.props.children}
      </div>
    )
  }
}

export default App;
