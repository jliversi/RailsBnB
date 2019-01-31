import React from 'react';
import ModalSessionForm from '../session/modal_session_container';
import SplashSearchContainer from '../search/splash_search_container';



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
            <SplashSearchContainer />
          </div>
        </div>
      </>
    );
  }
}

export default Splash;