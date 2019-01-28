import React from 'react';
import ShowMapContainer from '../map/show_map_container';
import ShowPhotosContainer from './show_photos_container';
import ShowReviewsContainer from '../reviews/show_reviews_container';

class SpotsShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.spotId);
  }

  render() {
    const spot = this.props.spot;
    const num_guests = spot.num_guests + ((spot.num_guests > 1) ? " guests" : " guest");
    const num_rooms = spot.num_rooms + ((spot.num_rooms > 1) ? " bedrooms" : " bedroom");
    const num_beds = spot.num_beds + ((spot.num_beds > 1) ? " beds" : " bed");
    const num_baths = spot.num_bathrooms + ((spot.num_bathrooms > 1) ? " baths" : " bath");
    const amenities = this.props.amenities ? this.props.amenities : [];
    const amenitiesEls = amenities.map((amenity, idx) => (
      <li className="one-amenity" key={idx}><span dangerouslySetInnerHTML={{ __html: amenity.sym }}></span> {amenity.name}</li>
    ));
    const reviews = this.props.reviews ? this.props.reviews : [];
    
    return (
      <div>
        <p>BOOKING REQUEST FORM ON RIGHT SIDE ALL TIMES</p>
        <p>Modal for photos</p>
        <ShowPhotosContainer photos={this.props.photos} />
        <div className="spot-show-content">
          <div className="basic-info-container">
            <p>{spot.spot_type}</p>
            <h1>{spot.title}</h1>
            <p>{spot.location}</p>
            <div className="num-details-container">
              <span>{num_guests}</span>
              <span>{num_rooms}</span>
              <span>{num_beds}</span>
              <span>{num_baths}</span>
            </div>
          </div>
          <div className="description-container">
            <h2>The Space</h2>
            <p>{spot.description}</p>
          </div>
          <div className="amenities-container">
            <ul>{amenitiesEls}</ul>
          </div>

          
          <p>Availability: Time to figure out that calendar.....</p>
          <p>Reviews</p>
          <ShowReviewsContainer spot={spot} reviews={reviews} />
          <p>Host Info</p>
          <h1>The neighborhood</h1>
          <ShowMapContainer />
        </div>
      </div>
    );
  }
}

export default SpotsShow;