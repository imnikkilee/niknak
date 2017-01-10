import React, {Component} from 'react';
import {Link} from 'react-router';

// Components
import Container from './Container';

// Images
import ImageDesign from '../images/design-illus.png';
import ImageProd from '../images/prod-illus.png';

// Styles
import './ProcessGrid.scss';

class ProcessGrid extends Component {
  render() {
    return (
      <Container size='fullWidth' className='ProcessGrid'>
        <Container size='maxWidth' className='innerContainer'>
          <h2 className='gridHeadline'>
            Our inspiration is you. We love to create awesome things for awesome people.
          </h2>

          {/* Consultation */}
          <div className='consRow'>
            <h3 className='consHeadline'>Consultation</h3>
            <div className='consOneCol'>
              <p>We kick things off with some quality chit-chat so we can find out all about you and the project you have in mind. We’ll want to know:</p>
              <ul>
                <li>what you'd like designed</li>
                <li>when you need it done by</li>
                <li>what your budget is</li>
              </ul>
            </div>
            <div className='consTwoCol'>
              <p>This is also a great time to share any inspiration you’ve gathered, so we can get a sense of your style and personality. Some great sources of inspiration are:</p>
              <ul>
                <li>Pinterest boards you've put together</li>
                <li>designs you really love</li>
                <li>color palettes</li>
                <li>if we're designing for a wedding, your dress, flowers, venue, or anything else you've already picked out</li>
              </ul>
            </div>
            <div className='consThreeCol'>
              <h4 className='consSubHeadline'>
                Consultations are free and noncommittal. Ready to schedule yours?
              </h4>
              <Link to='/contact-us' className='consCTA'>contact us</Link>
            </div>
          </div>

          {/* Quote */}
          <div className='quoteRow'>
            <h3 className='alt quoteHeadline'>Quote</h3>
            <div className='quoteOneCol'>
              <p>Every client, project, and budget is unique, and so are all of our quotes. We try to work with budgets of every size and will always try to bring your vision to life in a way that makes sense.</p>
            </div>
            <div className='quoteTwoCol'>
              <p>After the initial consultation, you’ll get a quote for the total cost of the project, including design and printing. The quote will summarize the deliverables as well as provide a schedule for the project.</p>
            </div>
          </div>

          {/* Design */}
          <div className='designRow'>
            <div className='designOneCol'>
              <img src={ImageDesign} className='illus' alt='Design' />
            </div>
            <div className='designTwoCol'>
              <h3 className='designHeadline'>Design</h3>
              <p>We use the inspiration you provided us during the consultation to guide our journey of making something totally awesome for you. We share our progress along the way, so you can be a part of the process from sketches to final design. We’re happy to go through multiple rounds of revisions with you, so long as we don’t get off schedule.</p>
            </div>
          </div>

          {/* Production */}
          <div className='prodRow'>
            <div className='prodOneCol'>
              <h3 className='alt prodHeadline'>Production</h3>
              <p>Once the final design has been approved, it’s off to print! We try to provide you with a physical proof when possible, so long as the schedule and print method permit.</p>
              <p>If the original quote includes stuffing envelopes or any other type of post-print assembly, we’ll be sure to get that done before sending you your finished project.</p>
            </div>
            <div className='prodTwoCol'>
              <img src={ImageProd} className='illus' alt='Production' />
            </div>
          </div>

        </Container>
      </Container>
    )
  }
}

export default ProcessGrid;
