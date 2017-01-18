import React, {Component} from 'react';

// Components
import Container from './Container';

// Images
import ImageWorkShower from '../images/work-shower.jpg';
import ImageWorkWedStd from '../images/work-std.jpg';
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
            We design custom paper goods for all the things in life worth celebrating!
          </h2>

          {/* Invitations */}
          <section className='invitations'>
            <div className='inviteRow'>
              <div className='inviteTextCol'>
                <h3 className='inviteHeadline'>
                  Invitations
                </h3>
                <p>
                  Whether you’re throwing a surprise party or hosting a shower, we can help you let your guests know when and where the party’s at with custom invitations.
                </p>
              </div>
              <img src={ImageWorkShower} className='inviteImage' alt='Bridal Shower Invitation'/>
            </div>
          </section>

          {/* Weddings */}
          <section className='weddings'> 
            <div className='wedOneRow'>
              <div className='wedTextCol'>
                <h3 className='alt wedHeadline'>
                  Wedding Stationery
                </h3>
                <p>
                  Your wedding stationery should be as  awesome as you are! That’s why we design  with your wants, needs, hopes, dreams, and budget in mind.
                </p>
                <p>We’re happy to create invitation suites, printed envelopes, thank you cards, custom maps, signage, table numbers, and anything else your heart desires.
                </p>
              </div>
              <img src={ImageWorkWedStd} className='wedStdImage' alt='Save the Date Magnet'/>
            </div>
            <div className='wedTwoRow'>
              <img src={ImageWorkWedSuite} className='wedSuiteImage' alt='Wedding Invitation Suite'/>
            </div>
            <div className='wedThreeRow'>
              <div className='wedSignCol'>
                <img src={ImageWorkWedSign} className='wedSignImage' alt='Wedding Signage'/>
                <small className='workImageCaption'>image by <a href='http://www.fourwingsphotography.com/' target='_blank'>Four Wings Photography</a></small>
              </div>
              <div className='wedEnclosuresCol'>
                <img src={ImageWorkWedEnvelope} className='wedEnvelopeImage' alt='Wedding Invitation Envelope'/>
                <img src={ImageWorkWedInvite} className='wedInviteImage' alt='Wedding Invitation'/>
              </div>
            </div>
          </section>

          {/* Everything Else */}
          <section className='everything'>
            <div className='everythingOneRow'>
              <div className='everythingTextCol'>
                <h3 className='everythingHeadline'>
                  Everything Else
                </h3>
                <p>
                  Thank you cards, birth announcements, business cards, get well cards, cards to say hello, cards to say you’re swell… we’re happy to work with you on whatever project you’re dreaming up.
                </p>
              </div>
              <img src={ImageWorkSummer} className='everythingSummerImage' alt='Happy Summer Greeting Card'/>
            </div>
            <div className='everythingTwoRow'>
              <div className='everythingCardsCol'>
                <img src={ImageWorkSpring} className='everythingSpringImage' alt='Happy Spring Greeting Card'/>
                <img src={ImageWorkThanks} className='everythingThanksImage' alt='Thank You Card'/>
              </div>
              <img src={ImageWorkHoliday} className='everythingHolidayImage' alt='Holiday Greeting Card'/>
            </div>
          </section>
        </Container>
      </Container>
    )
  }
}

export default WorkGrid;
