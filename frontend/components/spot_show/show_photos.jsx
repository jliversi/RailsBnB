import React from 'react';


class ShowPhotos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const mainPhotoUrl = this.props.photos ? this.props.photos[0].url : null;
    const photos = this.props.photos ? this.props.photos.slice(1) : null;
    let images;
    if (photos) {
      images = photos.map((photo, idx) => (
        <div className="one-sub-photo" key={idx}>
          <img src={photo.url} alt={`photo${idx}`} className="sub-photos" />
        </div>
      ));
    }


    return (
      <div className="show-photos-container">
        <div className="main-photo-container">
          <img className="main-photo" src={mainPhotoUrl} alt="main-photo"/>
        </div>
        <div className="sub-photos-container">
          {images}
        </div>
      </div>
    )
  }
}

export default ShowPhotos;