import React, {Component} from 'react';

// Components
import Navigation from './components/Navigation';

class App extends Component {
  render() {

    return (
      <div>
        <Navigation/>
        {this.props.children}
      </div>
    )
  }
}

export default App;
