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

  componentDidMount() {}

  revealMap() {
    this.setState({mapRevealed: !this.state.mapRevealed});
  }

  componentWillUnmount() {
    this.props.clearParams();
  }


  render() {
    const indexItems = Object.values(this.props.spots).map(spot => {
      return <SpotsIndexItemContainer spot={spot} key={spot.id} />
    });

    const mapSection = (this.props.indexItems.length > 0) ? (
      <div className={(this.state.mapRevealed) ? 'top-level-index-map-container-revealed' : 'top-level-index-map-container'}>
        <div className="map-show-switch">
          <p>Show Map</p>
          <label className="switch">
            <input type="checkbox" onClick={this.revealMap} />
            <span className="slider round"></span>
          </label>
          <div className={(this.state.mapRevealed) ? 'revealed-map index-map-container' : 'hidden-map index-map-container'}>
            <MapContainer />
          </div>
        </div>
      </div>
    ) : (
      null
    )
    
    const noResultsEl = (
      <p className="no-results-message">Unforunately, there are no spots which match your search.</p>
    )

    const resultsHeader = (
      <>
        <h1>Top-rated spots</h1>
        <p>Explore some of the best-reviewed homes in my seed file</p>
      </>
    )

      
    return (
      <div className="spots-index-container">
        <div className="spots-index-spots-container">
          {(this.props.indexItems.length === 0) ? noResultsEl : resultsHeader}
          <div className="spots-index-items-container">
            {indexItems}
          </div>
        </div>

        {mapSection}
        
        
      </div>
    )
  }
}

export default SpotsIndex; 


