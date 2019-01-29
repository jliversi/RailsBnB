import React from 'react';
import ReactDOM from 'react-dom';

class ShowMap extends React.Component {
  constructor(props) {
    super(props);
    this.addMarker = this.addMarker.bind(this);
  }

  componentDidUpdate() {
    const map = ReactDOM.findDOMNode(this.refs.map);
    const options = {
      center: this.props.mapCenter,
      zoom: 15
    };
    this.map = new google.maps.Map(map, options);

    this.addMarker(this.props.spot);
  }

  addMarker(spot) {
    const pos = new google.maps.LatLng(spot.lat, spot.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });
  }


  render() {
    return (
      <div>
        <div id='map' ref='map' />
      </div>
    )
  }
}

export default ShowMap;