import React from 'react';
import { DayPickerRangeController, isInclusivelyAfterDay, isSameDay } from 'react-dates';
import moment from 'moment';

class SplashSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
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
    this.update = this.update.bind(this);
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

    // Hack to fix calendar height, move the months while its hidden
    document.getElementsByClassName('DayPickerNavigation_rightButton__horizontalDefault')[0].click();
    setTimeout(() => document.getElementsByClassName('DayPickerNavigation_leftButton__horizontalDefault')[0].click(), 500);
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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const { startDate, endDate, location } = this.state; 
    if (startDate && endDate && (location.length > 0)) {
      const params = {
        location: this.state.location,
        startDate: this.state.startDate.format(),
        endDate: this.state.endDate.format(),
        numGuests: this.state.numGuests
      }
      this.props.fetchSpots(params).then(this.props.history.push('/index'));
    }
  }


  render() {
    const today = moment();
    const startDateString = this.state.startDate ? this.state.startDate.format('ddd, MMM Do') : "";
    const endDateString = this.state.endDate ? this.state.endDate.format('ddd, MMM Do') : "";


    return (
      <div className="splash-search-container">
        <h1>Book unique homes and experiences</h1>
        <form className="splash-search-form" onSubmit={this.handleSubmit}>
          <label htmlFor="location">WHERE</label>
          <input id="location" 
            type="text" 
            placeholder="Anywhere" 
            onChange={this.update("location")}
          />
          
          <div className="search-date-inputs">
            <label htmlFor="start-date">CHECK IN
              <input type="text"
                id="start-date"
                placeholder="mm/dd/yyyy"
                value={startDateString}
                readOnly 
                onClick={this.openCalendar}
                className="splash-date-input"
              />
            </label>
            <label htmlFor="end-date">CHECK OUT
              <input type="text"
                id="end-date"
                placeholder="mm/dd/yyyy"
                value={endDateString}
                readOnly 
                onClick={this.openCalendar}
                className="splash-date-input"
              />
            </label>
          </div>
          <label htmlFor="num-guests">GUESTS</label>
            <input type="number"
              id="num-guests"
              placeholder="Guests"
              value={this.state.numGuests}
              onClick={this.openGuests}
              readOnly
            />
          
          <button className="splash-search-button">Search</button>
        </form>
        <div className={this.state.calendarActive ? "revealed splash-search-calendar" : "hidden-cal splash-search-calendar"}>
        
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


        <div className={this.state.guestsActive ? "revealed-guests splash-search-guests" : "hidden splash-search-guests"}>
          <h3>Guests</h3>
          <div className="splash-search-guests-buttons">
            <button id="search-guests-subtract" className={(this.state.numGuests > 1) ? "revealed" : "hidden"}>-</button>
            <button id="search-guests-placeholder" className={(this.state.numGuests <= 1) ? "revealed" : "hidden"}>-</button>
            <span className="splash-num-guests">{this.state.numGuests}</span>
            <button id="search-guests-plus" >+</button>
          </div>
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
