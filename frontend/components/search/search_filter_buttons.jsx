import React from 'react';
import { DayPickerRangeController, isInclusivelyAfterDay, isSameDay } from 'react-dates';
import moment from 'moment';
import { merge } from 'lodash';

class SearchFilterButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: 'startDate',
      numGuests: 0,
      guestsActive: false,
      calendarActive: false
    }
    this.openCalendar = this.openCalendar.bind(this);
    this.openGuests = this.openGuests.bind(this);
    this.closeCalendar = this.closeCalendar.bind(this);
    this.subtractGuest = this.subtractGuest.bind(this);
    this.addGuest = this.addGuest.bind(this);
    this.closeGuests = this.closeGuests.bind(this);
    this.changeListener = this.changeListener.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const addGuest = this.addGuest;
    const subtractGuest = this.subtractGuest;

    document.getElementById('search-guests-subtract').addEventListener('click', function (e) {
      e.stopPropagation();
      subtractGuest();
    }, true);
    document.getElementById('search-guests-plus').addEventListener('click', function (e) {
      e.stopPropagation();
      addGuest();
    }, true);
  }

  openCalendar() {
    this.setState({ calendarActive: !this.state.calendarActive, guestsActive: false });
  }

  closeCalendar() {
    if (this.state.calendarActive && this.state.startDate && this.state.endDate) {
      const params = {
        startDate: this.state.startDate.format(),
        endDate: this.state.endDate.format()
      }
      const newParams = merge({}, this.props.currentParams, params)
      this.props.fetchSpots(newParams)
    }
    this.setState({ calendarActive: false, startDate: null, endDate: null, focusedInput: "startDate" });
  }

  openGuests() {
    this.setState({ guestsActive: !this.state.guestsActive, calendarActive: false }, () => this.changeListener());
  }

  closeGuests() {
    const params = { numGuests: this.state.numGuests }
    const newParams = merge({}, this.props.currentParams, params)
    this.props.fetchSpots(newParams);
    
    this.setState({ guestsActive: false, numGuests: 1 }, () => this.changeListener());
  }

  subtractGuest() {
    this.setState({ numGuests: (this.state.numGuests - 1) });
  }

  addGuest() {
    this.setState({ numGuests: (this.state.numGuests + 1) });
  }

  changeListener() {
    if (!this.state.guestsActive) {
      document.removeEventListener('click', this.closeGuests);
    } else {
      document.addEventListener('click', this.closeGuests);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    
  }



  render() {
    const today = moment();

    
    let startDateString;
    if (this.state.startDate) {
      startDateString = this.state.startDate.format('MMM D')
    } else if (this.props.currentParams.startDate) {
      startDateString = moment(this.props.currentParams.startDate).format('MMM D')
    } else {
      startDateString = ""
    }

    let endDateString;
    if (this.state.endDate) {
      endDateString = this.state.endDate.format('MMM D')
    } else if (this.props.currentParams.endDate) {
      endDateString = moment(this.props.currentParams.endDate).format('MMM D')
    } else {
      endDateString = ""
    }


    let dateButtonContent;
    let dateButtonStyle = "unselected-button";
    if (startDateString.length > 0 && endDateString.length > 0) {
      dateButtonContent = startDateString + " - " + endDateString;
      dateButtonStyle = "selected-button"
    } else if (startDateString.length > 0) {
      dateButtonContent = startDateString + " - Check out";
      dateButtonStyle = "selected-button";
    } else {
      dateButtonContent = "Dates"
    }

    let guestsButtonContent = "Guests";
    let guestsButtonStyle = "unselected-button";
    if (this.state.numGuests > 1) {
      guestsButtonContent = this.state.numGuests + " guests";
      guestsButtonStyle = "selected-button";
    } else if (this.props.currentParams.numGuests) {
      guestsButtonContent = this.props.currentParams.numGuests + " guests";
      guestsButtonStyle = "selected-button";
    }

    return (
      <div className="search-filter-buttons-container">
        <button onClick={this.openCalendar} className={dateButtonStyle}>{dateButtonContent}</button>
        <button onClick={this.openGuests} className={guestsButtonStyle}>{guestsButtonContent}</button>
        


        <div className={this.state.calendarActive ? "revealed navbar-search-calendar" : "hidden navbar-search-calendar"}>

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


        <div className={this.state.guestsActive ? "revealed-guests-navbar splash-search-guests" : "hidden splash-search-guests"}>
          <h3>Guests</h3>
          <div className="splash-search-guests-buttons">
            <button id="search-guests-subtract" className={(this.state.numGuests > 1) ? "revealed" : "hidden"}>-</button>
            <button id="search-guests-placeholder" className={(this.state.numGuests <= 1) ? "revealed" : "hidden"}>-</button>
            <span className="splash-num-guests">{this.state.numGuests}</span>
            <button id="search-guests-plus" >+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchFilterButtons;