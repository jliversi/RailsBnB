import React from 'react';

class SpotsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const spot = this.props.spot; 
    const imageId = spot.photos[0]
    const image = <img src={this.props.photos[imageId].url} alt={imageId} key={imageId}/>

    return (
      <div>
        <h1>{spot.title}</h1>
        {image}
        <p>${spot.price} per night</p>
        <p>Average rating: {spot.avg_rating}</p>
      </div>
    );
  }
}

export default SpotsIndexItem;