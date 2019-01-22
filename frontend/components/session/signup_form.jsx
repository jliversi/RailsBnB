import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      birthMonth: "",
      birthDay: "",
      birthYear: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // LOGIC FOR CONVERTING DATE ELEMENTS INTO DATE,
    // CONVERT VARIABLE NAMES TO SNAKE CASE? 
  }

 

  render() {
    const yearsArr = [];
    for (let i = 2019; i >= 1899; i--) {
      yearsArr.push(i);
    }

    const yearsOptions = yearsArr.map(year => {
      return (
        <option key={year} value={year}>{year}</option>
      );
    });

    const daysArr = [];
    for (let i = 1; i <= 31; i++) {
      daysArr.push(i);
    }

    const daysOptions = daysArr.map(day => {
      return (
        <option key={day} value={day}>{day}</option>
      );
    });

    return (
      <div className="signup-form-container">
        <button className="close-signup-form">&times;</button>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            <input id="email" type="email" placeholder="Email address" onChange={this.update("email")}/>
          </label>
          <label htmlFor="firstName">
            <input id="firstName" type="text" placeholder="First name" onChange={this.update("firstName")}/>
          </label>
          <label htmlFor="lastName">
            <input id="lastName" type="text" placeholder="Last name" onChange={this.update("lastName")}/>
          </label>
          <label htmlFor="password">
            <input id="password" type="password" placeholder="Create a Password" onChange={this.update("password")}/>
          </label>
          <div className="birthday-selectors-container">
            <label htmlFor="birthMonth">
              <select defaultValue="" id="birthMonth" onChange={this.update('birthMonth')}>
                <option disabled value="">Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </label>
            <label htmlFor="birthDay">
              <select defaultValue="" id="birthDay" onChange={this.update('birthDay')}>
                <option disabled value="">Day</option>
                {daysOptions}
              </select>
            </label>
            <label htmlFor="birthYear">
              <select defaultValue="" id="birthYear" onChange={this.update('birthYear')}>
                <option disabled value="">Year</option>
                {yearsOptions}
              </select>
            </label>
          </div>
          <button className="signup-button">Sign Up</button>
        </form>
        <span>Already have a RailsBnB account?</span>
        <Link to="/login">Log in</Link>
      </div>
    )
  }

}

export default SignupForm;