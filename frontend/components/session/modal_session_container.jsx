import React from 'react';
import ReactModal from 'react-modal';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

class ModalSessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalLogin: false,
      showModalSignup: false
    };
    this.handleOpenModalLogin = this.handleOpenModalLogin.bind(this);
    this.handleCloseModalLogin = this.handleCloseModalLogin.bind(this);
    this.handleOpenModalSignup = this.handleOpenModalSignup.bind(this);
    this.handleCloseModalSignup = this.handleCloseModalSignup.bind(this);
    this.switchLoginSignup = this.switchLoginSignup.bind(this);
    this.switchSignupLogin = this.switchSignupLogin.bind(this);
  }

  handleOpenModalLogin() {
    this.setState({showModalLogin: true});
  }

  handleCloseModalLogin() {
    this.setState({showModalLogin: false});
  }

  handleOpenModalSignup() {
    this.setState({showModalSignup: true});
  }

  handleCloseModalSignup() {
    this.setState({showModalSignup: false});
  }

  switchSignupLogin() {
    this.setState({showModalLogin: false, showModalSignup: true});
  }

  switchLoginSignup() {
    this.setState({showModalLogin: true, showModalSignup: false});
  }

  

  render() {
    return (
      <div>
        <div className={this.props.contName}>
          <button className={this.props.buttonName} onClick={this.handleOpenModalSignup}>Sign up</button>
          <button className={this.props.buttonName} onClick={this.handleOpenModalLogin}>Log in</button>
        </div>

        <ReactModal 
          ariaHideApp={false} 
          isOpen={this.state.showModalLogin}
          className="session-modal-content-login"
          overlayClassName="session-modal-overlay"
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.handleCloseModalLogin}
        >

          <button className="x-button" onClick={this.handleCloseModalLogin}>
            <p>&times;</p>
          </button>
          <LoginFormContainer />
          <div className="session-switch-container">
            <span>Don’t have an account?
              <button onClick={this.switchSignupLogin}>Sign up</button>
            </span>
          </div>


        </ReactModal>


        <ReactModal 
          ariaHideApp={false} 
          isOpen={this.state.showModalSignup}
          className="session-modal-content-signup"
          overlayClassName="session-modal-overlay"
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.handleCloseModalSignup}
        >


          <button className="x-button" onClick={this.handleCloseModalSignup}>
            <p>&times;</p>
          </button>
          <SignupFormContainer />
          <div className="session-switch-container">
            <span>Already have a RailsBnB account?
              <button onClick={this.switchLoginSignup}>Log in</button>
            </span>
          </div>


          
        </ReactModal>
      </div>
    )
  }
}

export default ModalSessionForm;