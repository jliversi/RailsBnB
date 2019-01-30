import React from 'react';
import { DayPickerRangeController, isInclusivelyAfterDay, isSameDay } from 'react-dates';
import moment from 'moment';

class SplashSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: 'startDate',
      numGuests: 1,
      calendarActive: false,
      guestsActive: false
    }
    this.openCalendar = this.openCalendar.bind(this);
    this.openGuests = this.openGuests.bind(this);
    this.closeCalendar = this.closeCalendar.bind(this);
    this.subtractGuest = this.subtractGuest.bind(this);
    this.addGuest = this.addGuest.bind(this);
    this.closeGuests = this.closeGuests.bind(this);
    this.changeListener = this.changeListener.bind(this);
  }

  openCalendar() {
    this.setState({calendarActive: !this.state.calendarActive, guestsActive: false});
  }
  closeCalendar() {
    this.setState({calendarActive: false});
  }

  openGuests() {
    this.setState({guestsActive: !this.state.guestsActive, calendarActive: false}, () => this.changeListener());
  }

  closeGuests() {
    this.setState({guestsActive: false}, () => this.changeListener());
  }

  subtractGuest() {
    this.setState({numGuests: (this.state.numGuests - 1)});
  }

  addGuest() {
    this.setState({numGuests: (this.state.numGuests + 1)});
  }

  changeListener() {
    if (!this.state.guestsActive) {
      document.removeEventListener('click', this.closeGuests);
    } else {
      document.addEventListener('click', this.closeGuests);
    }
  }


  render() {
    const today = moment();
    const startDateString = this.state.startDate ? this.state.startDate.format('ddd, MMM Do') : "";
    const endDateString = this.state.endDate ? this.state.endDate.format('ddd, MMM Do') : "";


    return (
      <div className="splash-search-container">
        <h1>Book unique homes and experiences</h1>
        <form className="splash-search-form">
          <label htmlFor="location">Where
            <input id="location" type="text" placeholder="Anywhere"/>
          </label>
          <label htmlFor="start-date">Check in
            <input type="text"
              id="start-date"
              placeholder="mm/dd/yyyy"
              value={startDateString}
              readOnly 
              onClick={this.openCalendar}
            />
          </label>
          <label htmlFor="end-date">Check out
            <input type="text"
              id="end-date"
              placeholder="mm/dd/yyyy"
              value={endDateString}
              readOnly 
              onClick={this.openCalendar}
            />
          </label>
          <label htmlFor="num-guests">Guests
            <input type="number"
              id="num-guests"
              placeholder="Guests"
              value={this.state.numGuests}
              onClick={this.openGuests}
              readOnly
            />
          </label>
          <button>Search</button>
        </form>
        <div className={this.state.calendarActive ? "revealed splash-search-calendar" : "hidden splash-search-calendar"}>
        
          <DayPickerRangeController
            startDate={this.state.startDate}
            noBorder={true}
            endDate={this.state.endDate}
            isOutsideRange={day => isInclusivelyAfterDay(today, day)}
            enableOutsideDays={false}
            numberOfMonths={2}
            onOutsideClick={this.closeCalendar}
            onPrevMonthClick={DayPickerRangeController.onPrevMonthClick}
            onNextMonthClick={DayPickerRangeController.onNextMonthClick}
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
            focusedInput={this.state.focusedInput}
            onFocusChange={(focusedInput) => this.setState({ focusedInput: focusedInput })}
          />
        </div>
        <div className={this.state.guestsActive ? "revealed splash-search-guests" : "hidden splash-search-guests"}>
          <h3>Guests</h3>
          <button className={(this.state.numGuests > 1) ? "revealed" : "hidden"} onClick={this.subtractGuest}>-</button>
          <span>{this.state.numGuests}</span>
          <button onClick={this.addGuest}>+</button>
        </div>
      </div>
    )
  }
}

export default SplashSearch;





// <DayPickerRangeController
//   onOutsideClick={DayPickerRangeController.onOutsideClick}
//   onPrevMonthClick={DayPickerRangeController.onPrevMonthClick}
//   onNextMonthClick={DayPickerRangeController.onNextMonthClick}
//   noBorder={true}
//   startDate={this.state.startDate}
//   endDate={this.state.endDate}
//   onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
//   focusedInput={this.state.focusedInput}
//   onFocusChange={focusedInput => this.setState({ focusedInput })}
//   numberOfMonths={2}
//   enableOutsideDays={false}
//   isOutsideRange={day => isInclusivelyAfterDay(today, day)}
//   hideKeyboardShortcutsPanel
//   hidden={false}
// />