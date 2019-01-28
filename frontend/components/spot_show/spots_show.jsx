import React from 'react';
import ShowMapContainer from '../map/show_map_container';
import ShowPhotosContainer from './show_photos_container';

class SpotsShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.spotId);
  }

  render() {
    return (
      <div>
        <p>BOOKING REQUEST FORM ON RIGHT SIDE ALL TIMES</p>
        <ShowPhotosContainer photos={this.props.photos} />
        <p>Modal for photos</p>
        <p>Spot Info</p>
        <ul>
          <li>Spot type</li>
          <li>Title</li>
          <li>Num details</li>
          <li>Num details</li>
          <li>Description</li>
        </ul>
        <p>Amenities</p>
        <p>Availability </p>
        <p>Reviews</p>
        <ul>
          <li># reviews</li>
          <li>Reviews details 
            <ul>
              <li>Accuracy</li>
              <li>Communication</li>
              <li>Cleanliness</li>
              <li>Location</li>
              <li>Check-in</li>
              <li>Value</li>
              <li>Search Reviews?!</li>
            </ul>
          </li>
          <li>Review 1</li>
          <li>Review 2</li>
          <li>Review 3</li>
        </ul>
        <p>Host Info</p>
        <h1>The neighborhood</h1>
        <ShowMapContainer />

      </div>
    );
  }
}

export default SpotsShow;