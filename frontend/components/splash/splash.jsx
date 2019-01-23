import React from 'react';
import { Link } from 'react-router-dom';

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
              <div className="splash-nav-button">
                <Link to="/signup">Sign up</Link>
              </div>
              <div className="splash-nav-button">
                <Link to="/login">Log in</Link>
              </div>
            </div>
          </header>

          <h1>Plan your next trip</h1>
          <div className="splash-search-container">
            <h2>Search component goes here</h2>
          </div>
        </div>
        <h1>Spots Index will go down here</h1>
      </>
    );
  }
}

export default Splash;