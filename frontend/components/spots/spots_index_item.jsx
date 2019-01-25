import React from 'react';
import { Link } from 'react-router-dom';


class SpotsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const spot = this.props.spot; 
    const imageId = spot.photos[0]
    const image = <img 
                    src={this.props.photos[imageId].url} 
                    alt={imageId} key={imageId}
                    className="index-item-img"  
                  />
    const starsFactor = Math.floor((spot.avg_rating / 5.0) * 50) + "px";
    const ratingsStyle = {
      height: "12px",
      width: starsFactor,
      overflow: "hidden"
    };
    

    return (
      <div className="index-item">
        <Link to={`/spots/${spot.id}`}>
          {image}
          <br/>
          <span className="index-type">{spot.spot_type.toUpperCase()} &middot; {spot.location.toUpperCase()}</span>
          <h1>{spot.title}</h1>
          <p className="index-price">${spot.price} per night</p>
          <div style={ratingsStyle}>
            <img src="https://s3.amazonaws.com/railsbnb-pub/rating_stars.png" alt="rating-stars"/>
          </div>
        </Link>
      </div>
    );
  }
}

export default SpotsIndexItem;