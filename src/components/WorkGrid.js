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
import ImageWorkHoliday from '../images/work-holiday.jpg';
import ImageWorkSpring from '../images/work-spring.jpg';
import ImageWorkSummer from '../images/work-summer.jpg';
import ImageWorkThanks from '../images/work-thanks.jpg';

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
            <img src={ImageWorkStd} className='stdImage' alt='Save the Date'/>
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
            <img src={ImageWorkShower} className='showerImage' alt='Bridal Shower Invitation'/>
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
            <img src={ImageWorkWedInvite} className='wedInviteImage' alt='Wedding Invitation'/>
          </div>
          <div className='wedTwoRow'>
            <img src={ImageWorkWedSuite} className='wedSuiteImage' alt='Wedding Invitation Suite'/>
          </div>
          <div className='wedThreeRow'>
            <img src={ImageWorkWedSign} className='wedSignImage' alt='Wedding Signage'/>
            <img src={ImageWorkWedEnvelope} className='wedEnvelopeImage' alt='Wedding Invitation Envelope'/>
          </div>

          {/* Greeting Cards */}
          <div className='cardRow'>
            <div className='cardTextCol'>
              <h3 className='alt cardHeadline'>
                Greeting Cards
              </h3>
              <p>
                Send friends and family a message that means more. Celebrate your favorite holiday with a custom greeting card.
              </p>
            </div>
            <img src={ImageWorkHoliday} className='cardImage' alt='Holiday Greeting Card'/>
          </div>

          {/* Everything Else */}
          <div className='otherOneRow'>
            <div className='otherTextCol'>
              <h3 className='otherHeadline'>
                Everything Else
              </h3>
              <p>
                Thank you cards, birth announcements, business cards, get well cards, cards to say hello, cards to say you’re swell… we’re happy to work with you on whatever project you’re dreaming up.
              </p>
            </div>
            <img src={ImageWorkSummer} className='otherSummerImage' alt='Happy Summer Card'/>
          </div>
          <div className='otherTwoRow'>
            <img src={ImageWorkThanks} className='otherThanksImage' alt='Thank You Card'/>
            <img src={ImageWorkSpring} className='otherSpringImage' alt='Happy Spring Card'/>
          </div>
        </Container>
      </Container>
    )
  }
}

export default WorkGrid;
