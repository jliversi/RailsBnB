import React from 'react';
import { Link } from 'react-router-dom';
import ModalSessionForm from '../session/modal_session_container';
import NavBarSearchContainer from './navbar_search_container';



class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownActive: false };
    this.reveal = this.reveal.bind(this);
    this.changeListener = this.changeListener.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.logoClick = this.logoClick.bind(this);
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

  logoClick() {
    this.props.fetchSpots({}).then(this.props.clearParams()).then(this.props.history.push('/index'))
  }

  render() {
      const userLetter = this.props.currentUser ? this.props.user.first_name[0] : '';
    const loggedInButtons = (
      <div onClick={this.reveal} className='nav-bar-buttons-logged-in'>
        <div className='user-logo'>{userLetter}</div>
        <div onClick={this.stopProp} className={this.state.dropdownActive ? "account-buttons revealed" : "account-buttons hidden"}>
          <ul>
            <button onClick={this.handleLogout}>Logout</button>
          </ul>
        </div>
      </div>
    )

    const loggedOutButtons = <ModalSessionForm buttonName={"nav-bar-button-logged-out"} contName={ "nav-bar-buttons-logged-out"}/> 


    return (
      <header>
        <div className="main-nav-bar">
          <div className="logo-and-search">
            <p className="nav-logo" onClick={this.logoClick}>R</p>
            <NavBarSearchContainer /> 
          </div>
          {this.props.currentUser ? loggedInButtons : loggedOutButtons}
        </div>
      </header>
    )
  }
};

export default NavBar;

