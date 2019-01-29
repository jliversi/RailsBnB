import React from 'react';
import ShowMapContainer from '../map/show_map_container';
import ShowPhotosContainer from './show_photos_container';
import ShowReviewsContainer from '../reviews/show_reviews_container';
import ShowCalendarContainer from '../calendar/show_calendar_container';

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
      <span className="one-amenity" key={idx}><i className='material-icons'>{amenity.sym}</i> {amenity.name}</span>
    ));
    const reviews = this.props.reviews ? this.props.reviews : [];
    const spotType = spot.spot_type ? spot.spot_type.toUpperCase() : null;
    return (
      <div className="spot-show">
        <p>BOOKING REQUEST FORM ON RIGHT SIDE ALL TIMES</p>
        <p>Modal for photos</p>
        <ShowPhotosContainer photos={this.props.photos} />
        <div className="non-photos-show">
          <div className="spot-show-content">
            <div className="basic-info-container">
              <p className="spot-type">{spotType}</p>
              <h1>{spot.title}</h1>
              <p className="spot-location">{spot.location}</p>
              <div className="num-details-container">
                <i className="material-icons">people</i>
                <span>{num_guests}</span>
                <span>{num_rooms}</span>
                <span>{num_beds}</span>
                <span>{num_baths}</span>
              </div>
            </div>
            <div className="description-container">
              <p>{spot.description}</p>
            </div>
            <div className="top-level-amenities-container">
              <h3>Amenities</h3>
              <div className="amenities-container">
                {amenitiesEls}
              </div>
            </div>

            <div className="availability-container">
              <h3>Availability</h3>
              <ShowCalendarContainer />
            </div>
            <p>Reviews</p>
            <ShowReviewsContainer spot={spot} reviews={reviews} />

            
            <p>Host Info</p>
            <h1>The neighborhood</h1>
            <ShowMapContainer />
          </div>
          <div className="booking-request-container">
            <p>THIS WILL BECOME THE BOOKING REQUEST BOX. 
              Quisque blandit nec urna sed dictum. Nullam eget maximus lectus, 
              ed egestas nibh. Praesent auctor magna eget placerat hendrerit. 
              Cras lobortis accumsan nisl, bibendum consequat odio vestibulum 
              sed. Proin feugiat, nulla et lacinia pellentesque, diam augue 
              elementum justo, vitae eleifend ipsum nisi ut lorem. Morbi vitae 
              apien non nunc aliquet venenatis ut vitae diam. Sed ut dapibus nisl.
              ongue aliquam fringilla. Donec eu mollis ante, at ultrices turpis. 
              Sed a ultrices orci, vel elementum massa. Quisque lobortis egestas 
              velit sit amet dignissim. Vestibulum posuere interdum nisl. Proin
              eget posuere quam. Sed sodales diam neque, scelerisque vehicula 
              felis porta id. Suspendisse odio ante, accumsan vel felis vitae, 
              rutrum elementum ante. Vivamus non dapibus purus.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SpotsShow;