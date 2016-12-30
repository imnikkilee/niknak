import React, {Component} from 'react';

// Components
import Container from './Container';

// Images
import ImageWorkStd from '../images/work-std.jpg';
import ImageWorkShower from '../images/work-shower.jpg'

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
            <img src={ImageWorkShower} className='showerImage'/>
            <div className='showerTextCol'>
              <h3 className='alt showerHeadline'>
                Shower Invitations
              </h3>
              <p>
                Give your guests a unique foreshadowing of the fun to come! Folded cards, postcards, or magnets are just some of the ways you can tell your guests to save the date.
              </p>
            </div>
          </div>
        </Container>
      </Container>
    )
  }
}

export default WorkGrid;
