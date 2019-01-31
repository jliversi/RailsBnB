import React from 'react';
import ReactDOM from 'react-dom';

class IndexMap extends React.Component {
  constructor(props) {
    super(props);

    this.addMarker = this.addMarker.bind(this);
  }

  componentDidMount() {
    const map = ReactDOM.findDOMNode(this.refs.map);
    const options = {
      center: this.props.mapCenter,
      zoom: 13
    };
    this.map = new google.maps.Map(map, options);

    if (this.props.spots) {
      this.props.spots.forEach(this.addMarker);
    }
  }

  componentDidUpdate(prevProps) {
    const numChanged = (prevProps.spots.length !== this.props.spots.length);
    const firstChanged = (prevProps.spots[0].id !== this.props.spots[0].id);

    if (numChanged || firstChanged) {
      const map = ReactDOM.findDOMNode(this.refs.map);
      const options = {
        center: this.props.mapCenter,
        zoom: 13
      };
      this.map = new google.maps.Map(map, options);
  
      if (this.props.spots) {
        this.props.spots.forEach(this.addMarker);
      }
    }
  }

  addMarker(spot) {
    const pos = new google.maps.LatLng(spot.lat, spot.lng);

    const icon = {
      url: "http://maps.google.com/mapfiles/kml/paddle/wht-blank.png",
      labelOrigin: new google.maps.Point(32, 20)
    }
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      label: {
        text: ("$" + spot.price.toString()),
        fontFamily: "Helvetica Neue",
        fontSize: "14px",
        fontColor: "white"
      },
      
      icon
    });
    marker.addListener('click', () => {
      const ext = `/spots/${spot.id}`;
      this.props.history.push(ext);
    });
  }


  render() {
    return (
      <div>
        <div  id='map' ref='map' />
      </div>
    )
  }
}

export default IndexMap;
