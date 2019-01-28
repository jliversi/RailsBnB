import React from 'react';


class ShowPhotos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const photos = this.props.photos.slice(1);
    const images = photos.map((photo, idx) => (
      <img src={photo.url} alt={`photo${idx}`} className="sub-photos" />
    ));


    return (
      <div className="show-photos-container">
        <div className="main-photo-container">
          <img className="main-photo" src={this.props.photos[0].url} alt="main-photo"/>
        </div>
        {images}
      </div>
    )
  }
}

export default ShowPhotos;