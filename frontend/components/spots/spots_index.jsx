import React from 'react';
import SpotsIndexItemContainer from './spots_index_item_container';
import MapContainer from '../map/index_map_container';

class SpotsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapRevealed: false
    };

    this.revealMap = this.revealMap.bind(this);
  }

  componentDidMount() {
    this.props.fetchSpots();
  }

  revealMap() {
    this.setState({mapRevealed: !this.state.mapRevealed});
  }


  render() {
    const indexItems = Object.values(this.props.spots).map(spot => {
      return <SpotsIndexItemContainer spot={spot} key={spot.id} />
    });
   
    return (
      <div className="spots-index-container">
        <div className="spots-index-spots-container">
          <h1>Top-rated spots</h1>
          <p>Explore some of the best-reviewed homes in my seed file</p>
          <div className="spots-index-items-container">
            {indexItems}
          </div>
        </div>

        <div className={(this.state.mapRevealed) ? 'top-level-index-map-container-revealed' : 'top-level-index-map-container'}>
          <div className="map-show-switch">
            <p>Show Map</p>
            <label className="switch">
              <input type="checkbox" onClick={this.revealMap}/>
              <span className="slider round"></span>
            </label>
            <div className={(this.state.mapRevealed) ? 'revealed-map index-map-container' : 'hidden-map index-map-container'}>
              <MapContainer />
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default SpotsIndex; 


