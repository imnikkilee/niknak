import React, {Component} from 'react';

// Components
import Container from './Container';

// Images
import ImageWorkStd from '../images/work-std.jpg';
import ImageWorkShower from '../images/work-shower.jpg';
import ImageWorkWedInvite from '../images/work-invite.jpg';
import ImageWorkWedSuite from '../images/work-suite.jpg';
import ImageWorkWedSign from '../images/work-sign.jpg';
import ImageWorkWedEnvelope from '../images/work-envelope.jpg';

// Styles
import './WorkGrid.scss';

class WorkGrid extends Component {
  render() {
    return (
      <Container size='fullWidth' className='WorkGrid'>
        <Container size='maxWidth' className='innerContainer'>
          <h2 className='gridHeadline'>
            We design custom stationery for weddings, showers, holidays, and all the other awesome parts of life.
          </h2>

          {/* Save the Dates */}
          <div className='stdRow'>
            <div className='stdTextCol'>
              <h3 className='stdHeadline'>
                Save the Dates
              </h3>
              <p>
                Give your guests a unique foreshadowing of the fun to come! Folded cards, postcards, or magnets are just some of the ways you can tell your guests to save the date.
              </p>
            </div>
            <img src={ImageWorkStd} className='stdImage'/>
          </div>

          {/* Showers */}
          <div className='showerRow'>
            <div className='showerTextCol'>
              <h3 className='alt showerHeadline'>
                Shower Invitations
              </h3>
              <p>
                Give your guests a unique foreshadowing of the fun to come! Folded cards, postcards, or magnets are just some of the ways you can tell your guests to save the date.
              </p>
            </div>
            <img src={ImageWorkShower} className='showerImage'/>
          </div>

          {/* Weddings */}
          <div className='wedOneRow'>
            <div className='wedTextCol'>
              <h3 className='wedHeadline'>
                Wedding Stationery &amp; Signange
              </h3>
              <p>
                Your wedding stationery should be as awesome as you are! That’s why we design with your wants, needs, hopes, dreams, and budget in mind.
              </p>
              <p>We’re happy to work on invitation suites, printed envelopes, thank you cards, custom maps, signage, table numbers, and anything else your heart desires!
              </p>
            </div>
            <img src={ImageWorkWedInvite} className='wedInviteImage'/>
          </div>
          <div className='wedTwoRow'>
            <img src={ImageWorkWedSuite} className='wedSuiteImage'/>
          </div>
          <div className='wedThreeRow'>
            <img src={ImageWorkWedSign} className='wedSignImage'/>
            <img src={ImageWorkWedEnvelope} className='wedEnvelopeImage'/>
          </div>
        </Container>
      </Container>
    )
  }
}

export default WorkGrid;
