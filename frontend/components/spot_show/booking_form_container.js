import { connect } from "react-redux";
import BookingForm from "./booking_form";
import moment from 'moment';
const msp = (state, ownProps) => {
  const createRangeArray = (startDate, stopDate) => {
    const rangeArray = [];
    let start = moment(startDate);
    const end = moment(stopDate);
    while (start <= end) {
      rangeArray.push(moment(start).format('YYYY-MM-DD'));
      start = moment(start).add(1, 'days');
    }
    return rangeArray;
  };

  const spot = ownProps.spot;
  const spotBookings = spot.bookings ? spot.bookings : [];
  const bookedDates = spotBookings.map(bookId => {
    return createRangeArray(state.entities.bookings[bookId].start_date, state.entities.bookings[bookId].end_date);
  }).flat();

  return {
    spot,
    bookedDates
  };
};

const mdp = dispatch => {
  return {};
};


export default connect(msp, mdp)(BookingForm)