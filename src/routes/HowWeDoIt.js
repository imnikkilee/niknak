import React, {Component} from 'react';

// Components
import BlankHero from '../components/BlankHero';
import FooterCta from '../components/FooterCta';
import ProcessGrid from '../components/ProcessGrid';

class HowWeDoIt extends Component {
  render() {
    return (
      <div>
        <BlankHero className='opt2'/>
        <ProcessGrid />
        {/*<FooterCta/>*/}
      </div>
    )
  }
}

export default HowWeDoIt;
