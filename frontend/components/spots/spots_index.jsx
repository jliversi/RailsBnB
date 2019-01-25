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
        <h1>ALL SPOTS</h1>
        {indexItems}
      </div>
    )
  }
}

export default SpotsIndex; 


