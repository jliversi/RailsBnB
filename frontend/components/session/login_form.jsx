import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.submit({email: "demo@demo.com", password: "demo123"});
  }

  render() {
    const errorsFormatted = this.props.errors.map((error, idx) => {
      return (
        <li key={idx}>{error}</li>
      );
    });


    return (
      <div className="session-form-container">
        <ul className="session-errors">
          {errorsFormatted}
        </ul>

        <form className="session-form" >
          <label htmlFor="login-email">
            <input id="login-email" type="email" placeholder="Email Address" onChange={this.update("email")} />
          </label>
          <label htmlFor="login-password">
            <input id="login-password" type="password" placeholder="Password" onChange={this.update("password")} />
          </label>
          <button onClick={this.handleSubmit}>Log in</button>
          <button onClick={this.demoLogin}>Log in as demo user</button>
        </form>

        
      </div>
    )
  }

}

export default LoginForm;