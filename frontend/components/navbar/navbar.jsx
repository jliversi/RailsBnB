import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownActive: false};
    this.reveal = this.reveal.bind(this);
    this.changeListener = this.changeListener.bind(this);
  }

  componentDidMount() {
  }

  reveal() {
    this.setState({ dropdownActive: !this.state.dropdownActive }, () => this.changeListener());
  }

  changeListener() {
    if (!this.state.dropdownActive) {
      document.removeEventListener('click', this.reveal);
    } else {
      document.addEventListener('click', this.reveal);
    }
  }

  render() {
    return (
      <header>
        <div className="main-nav-bar">
          <div className="logo-and-search">
            <Link className="nav-logo" to="/index">R</Link>
            <p>Search Bar Goes Here</p>
          </div>
          <div onClick={this.reveal} className='nav-bar-buttons'>
            <img src="assets/rails_bnb.ico" alt="user-logo" />
            <div onClick={this.stopProp} className={this.state.dropdownActive ? "account-buttons revealed" : "account-buttons hidden"}>
              <ul>
                <button onClick={this.props.logout}>Logout</button>
                <button>My Account</button>
              </ul>
            </div>
          </div>
        </div>
      </header>
    )
  }
};

export default NavBar;