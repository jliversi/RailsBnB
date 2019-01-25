import React from 'react';

class SpotsShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.spot.id);
  }

  render() {

    return (
      <div>
        <h1>{this.props.spot.title}</h1>
      </div>
    );
  }
}

export default SpotsShow;