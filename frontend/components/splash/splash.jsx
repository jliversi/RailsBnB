import React from 'react';
import ModalSessionForm from '../session/modal_session_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {


    return (
      <>
        <div className="splash">
          <header>
            <div className="splash-logo-container">
              <p className="logo">R</p>
            </div>
            <div className="splash-nav-buttons">
              <ModalSessionForm  />
            </div>
          </header>

          <h1>Plan your next trip</h1>
          <div className="splash-search-container">
            <h2>I WILL BECOME A SEARCH BAR</h2>
          </div>
        </div>
      </>
    );
  }
}

export default Splash;