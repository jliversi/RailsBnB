import React from 'react';
import ReactModal from 'react-modal';

class ModalPhotos extends React.Component {
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
  }

  handleOpenModal() {
    this.setState({showModal: true});
  }
  handleCloseModal() {
    this.setState({showModal: false});
  }
  nextPhoto() {
    this.setState({whichPhoto: (this.state.whichPhoto + 1)});
  }
  prevPhoto() {
    this.setState({whichPhoto: (this.state.whichPhoto - 1)});
  }

  render() {
    const modalPhotos = this.props.photos ? this.props.photos : [];
    const modalImage = modalPhotos[this.state.whichPhoto] ? modalPhotos[this.state.whichPhoto] : {url: "", caption: ""};
    const modalImageEl = ( <img src={modalImage.url} alt="spot-photo"/> );
    const modalCaptionEl = ( <p>{modalImage.caption}</p> );

    const prevButton = (this.state.whichPhoto > 0) ? (<button className="prev-photo" onClick={this.prevPhoto}> &lt; </button> ) : null;
    const nextButton = (this.state.whichPhoto < 4) ? (<button className="next-photo" onClick={this.nextPhoto}> &gt; </button> ) : null;

    return (
      <div className="photos-modal-top-level" onClick={this.handleOpenModal}>
        <ReactModal
          ariaHideApp={false}
          isOpen={this.state.showModal}
          className="photos-modal-content"
          overlayClassName="photos-modal-overlay"
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.handleCloseModalLogin}
        >
          <button className="photos-x-button" onClick={this.handleCloseModal}>&times;</button>
          {modalImageEl}
          {modalCaptionEl}
          {prevButton}
          {nextButton}
        </ReactModal>
      </div>
    )
  } 
}

export default ModalPhotos;