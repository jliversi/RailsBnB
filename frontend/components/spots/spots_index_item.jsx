import React from 'react';

class SpotsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    const images = this.props.spot.photos.map(id => (
      <img src={this.props.photos[id].url} alt={id} key={id}/>
    ));

    
    return (
      <div>
        <h1>{this.props.spot.title}</h1>
        {images}
      </div>
    );
  }
}

export default SpotsIndexItem;