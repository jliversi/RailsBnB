import React from 'react';
import { Link } from 'react-router-dom';
import ModalSessionForm from '../session/modal_session_container';



class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownActive: false };
    this.reveal = this.reveal.bind(this);
    this.changeListener = this.changeListener.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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

  handleLogout() {
    this.props.logout();
  }

  render() {
    const loggedInButtons = (
      <div onClick={this.reveal} className='nav-bar-buttons-logged-in'>
        <img src="https://s3.amazonaws.com/railsbnb-pub/rails_bnb.ico" alt="user-logo" />
        <div onClick={this.stopProp} className={this.state.dropdownActive ? "account-buttons revealed" : "account-buttons hidden"}>
          <ul>
            <button onClick={this.handleLogout}>Logout</button>
            <button>My Account</button>
          </ul>
        </div>
      </div>
    )

    const loggedOutButtons = <ModalSessionForm buttonName={"nav-bar-button-logged-out"} contName={ "nav-bar-buttons-logged-out"}/> 


    return (
      <header>
        <div className="main-nav-bar">
          <div className="logo-and-search">
            <Link className="nav-logo" to="/index">R</Link>
            <p>Search Bar Goes Here</p>
          </div>
          {this.props.currentUser ? loggedInButtons : loggedOutButtons}
        </div>
      </header>
    )
  }
};

export default NavBar;