import React from 'react';
import { DayPickerRangeController, isInclusivelyAfterDay, isSameDay } from 'react-dates';
import moment from 'moment';

const today = moment();

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      numGuests: 1
    }
    this.openCalendar = this.openCalendar.bind(this);
    this.openGuests = this.openGuests.bind(this);
    this.closeCalendar = this.closeCalendar.bind(this);
    this.subtractGuest = this.subtractGuest.bind(this);
    this.addGuest = this.addGuest.bind(this);
    this.closeGuests = this.closeGuests.bind(this);
    this.changeListener = this.changeListener.bind(this);
    this.isDayBlocked = this.isDayBlocked.bind(this);
    this.submitBookingRequest = this.submitBookingRequest.bind(this);
  }

  componentDidMount() {
    const addGuest = this.addGuest;
    const subtractGuest = this.subtractGuest;

    document.getElementById('request-guests-subtract').addEventListener('click', function (e) {
      e.stopPropagation();
      subtractGuest();
    }, true);
    document.getElementById('request-guests-plus').addEventListener('click', function (e) {
      e.stopPropagation();
      addGuest();
    }, true);
  }

  isDayBlocked(day1) {
    return this.props.bookedDates.some(day2 => {
      return isSameDay(day1, moment(day2));
    });
  }

  openCalendar() {
    this.setState({ calendarActive: !this.state.calendarActive, guestsActive: false });
  }
  closeCalendar() {
    this.setState({ calendarActive: false });
  }

  openGuests() {
    this.setState({ guestsActive: !this.state.guestsActive, calendarActive: false }, () => this.changeListener());
  }

  closeGuests() {
    this.setState({ guestsActive: false }, () => this.changeListener());
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
      document.addEventListener('click', this.closeGuests, false);
    }
  }

  submitBookingRequest(e) {
    e.preventDefault();
  }



  render() {
    const spot = this.props.spot;
    const price = spot.price; 
    const starsFactor = Math.floor((spot.avg_rating / 5.0) * 50) + "px";
    const ratingsStyle = {
      height: "12px",
      width: starsFactor,
      overflow: "hidden"
    };

    const startDateString = this.state.startDate ? this.state.startDate.format('ddd, MMM Do') : "";
    const endDateString = this.state.endDate ? this.state.endDate.format('ddd, MMM Do') : "";
    


    return (
      <div className="booking-request">
        <h1>${price}<span> per night</span></h1>
        <div className="booking-rating-stars-container">
          <div style={ratingsStyle}>
            <img src="https://s3.amazonaws.com/railsbnb-pub/rating_stars.png" alt="rating-stars" />
          </div>
          <span>{spot.num_reviews}</span>
        </div>
        <form className="submit-booking-form" onSubmit={this.submitBookingRequest}>
          <label htmlFor="booking-dates">Dates
            <div className="booking-dates">
              <input type="text"
                  id="start-date"
                  placeholder="Check in"
                  value={startDateString}
                  readOnly
                  onClick={this.openCalendar}
                />
              <span>→</span>
              <input type="text"
                  id="end-date"
                  placeholder="Check out"
                  value={endDateString}
                  readOnly
                  onClick={this.openCalendar}
                />
            </div>
          </label>
          <label htmlFor="booking-guests">Guests
            <input type="number"
              id="booking-guests"
              placeholder="1 Guest"
              value={this.state.numGuests}
              readOnly
              onClick={this.openGuests}
            />
          </label>
          <button>Book</button>
        </form>

        <div className={this.state.calendarActive ? "revealed request-calendar" : "hidden request-calendar"}>

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
            isDayBlocked={this.isDayBlocked}
          />
        </div>
        <div id="request-guests" className={this.state.guestsActive ? "revealed request-guests" : "hidden request-guests"}>
          <h3>Guests</h3>
          <button id="request-guests-subtract" className={(this.state.numGuests > 1) ? "revealed" : "hidden"}>-</button>
          <span>{this.state.numGuests}</span>
          <button id="request-guests-plus">+</button>
        </div>
      </div>
    )
  }
}



export default BookingForm;

