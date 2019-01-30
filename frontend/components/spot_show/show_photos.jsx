import React from 'react';
import ReactModal from 'react-modal';


class ShowPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      whichPhoto: 0
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
    this.prevPhoto = this.prevPhoto.bind(this);
    this.setWhichPhoto = this.setWhichPhoto.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }
  handleCloseModal() {
    this.setState({ showModal: false });
  }
  nextPhoto() {
    this.setState({ whichPhoto: (this.state.whichPhoto + 1) });
  }
  prevPhoto() {
    this.setState({ whichPhoto: (this.state.whichPhoto - 1) });
  }

  setWhichPhoto(num) {
    this.setState({whichPhoto: num});
  }

  render() {
    
    const mainPhotoUrl = this.props.photos ? this.props.photos[0].url : null;
    const photos = this.props.photos ? this.props.photos.slice(1) : null;
    let images;
    if (photos) {
      images = photos.map((photo, idx) => (
        <div className="one-sub-photo" key={idx} onClick={() => this.setWhichPhoto((idx + 1))}>
          <img src={photo.url} alt={`photo${idx}`} className="sub-photos" />
        </div>
      ));
    }
    const modalPhotos = this.props.photos ? this.props.photos : [];
    const modalImage = modalPhotos[this.state.whichPhoto] ? modalPhotos[this.state.whichPhoto] : { url: "", caption: "" };
    const modalImageEl = (<img className="modal-photo" src={modalImage.url} alt="spot-photo" />);
    const which = this.state.whichPhoto + 1
    const modalCaptionEl = (<p className="modal-caption" >{which}/5: {modalImage.caption}</p>);

    const prevButton = (this.state.whichPhoto > 0) ? (<button className="prev-photo" onClick={this.prevPhoto}> &lt; </button>) : null;
    const nextButton = (this.state.whichPhoto < 4) ? (<button className="next-photo" onClick={this.nextPhoto}> &gt; </button>) : null;


    return (
      <>
        <div className="show-photos-container" onClick={this.handleOpenModal}>
          <div className="main-photo-container" onClick={() => this.setWhichPhoto((0))}>
            <img className="main-photo" src={mainPhotoUrl} alt="main-photo"/>
          </div>
          <div className="sub-photos-container">
            {images}
          </div>
        </div>
        <ReactModal
          ariaHideApp={false}
          isOpen={this.state.showModal}
          className="photos-modal-content"
          overlayClassName="photos-modal-overlay"
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.handleCloseModal}
        >
          <button className="photos-x-button" onClick={this.handleCloseModal}>&times;</button>
          {modalImageEl}
          {modalCaptionEl}
          {prevButton}
          {nextButton}
        </ReactModal>
      </>
    )
  }
}

export default ShowPhotos;