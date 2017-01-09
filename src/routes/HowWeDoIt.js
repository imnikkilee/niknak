import React, {Component} from 'react';

// Components
import FooterCta from '../components/FooterCta';
import ProcessGrid from '../components/ProcessGrid';
import Navigation from '../components/Navigation';

class HowWeDoIt extends Component {
  render() {
    return (
      <div>
        <Navigation current='how-we-do-it'/>
        <ProcessGrid />
        {/*<FooterCta/>*/}
      </div>
    )
  }
}

export default HowWeDoIt;
