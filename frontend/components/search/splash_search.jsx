import React from 'react';
import { DayPickerRangeController, isInclusivelyAfterDay, isSameDay } from 'react-dates';
import moment from 'moment';

class SplashSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      numGuests: 1,
      calendarActive: false,
      guestsActive: false
    }
    this.openCalendar = this.openCalendar.bind(this);
    this.openGuests = this.openGuests.bind(this);
  }

  openCalendar() {
    this.setState({calendarActive: !this.state.calendarActive, guestsActive: false});
  }

  openGuests() {
    this.setState({guestsActive: !this.state.guestsActive, calendarActive: false});
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
          <p>Will I show UP?</p>
          
          <DayPickerRangeController
            onOutsideClick={DayPickerRangeController.onOutsideClick}
            onPrevMonthClick={DayPickerRangeController.onPrevMonthClick}
            onNextMonthClick={DayPickerRangeController.onNextMonthClick}
            noBorder={true}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
            numberOfMonths={2}
            isOutsideRange={day => isInclusivelyAfterDay(today, day)}
            hideKeyboardShortcutsPanel
          />
        </div>
        <div className={this.state.guestsActive ? "revealed splash-search-guests" : "hidden splash-search-guests"}>
          <p>I AM THE GUEST PICKER</p>
        </div>
      </div>
    )
  }
}

export default SplashSearch;



