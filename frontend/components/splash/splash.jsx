import React from 'react';
import ModalSessionForm from '../session/modal_session_container';
import SplashSearch from '../search/splash_search';

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
            <ModalSessionForm buttonName={"splash-nav-button"} contName={"splash-nav-buttons"}/>
          </header>
          <div>
            <SplashSearch />
          </div>
        </div>
      </>
    );
  }
}

export default Splash;