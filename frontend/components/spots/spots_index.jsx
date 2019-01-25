import React from 'react';
import SpotsIndexItemContainer from './spots_index_item_container';

class SpotsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpots();
  }


  render() {
    const indexItems = Object.values(this.props.spots).map(spot => {
      return <SpotsIndexItemContainer spot={spot} key={spot.id} />
    });
   
    return (
      <div className="spots-index-container">
        <h1>Top-rated spots</h1>
        <p>Explore some of the best-reviewed homes in my seed file</p>
        <div className="spots-index-items-container">
          {indexItems}
        </div>
      </div>
    )
  }
}

export default SpotsIndex; 


