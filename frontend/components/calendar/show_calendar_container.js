import { connect } from 'react-redux';
import moment from 'moment';
import ShowCalendar from './show_calendar';
import { withRouter } from 'react-router-dom';



const msp = (state, ownProps) => {
  const createRangeArray = (startDate, stopDate) => {
    const rangeArray = [];
    let start = moment(startDate);
    const end = moment(stopDate);
    while (start <= end) {
      rangeArray.push(moment(start).format('YYYY-MM-DD'))
      start = moment(start).add(1, 'days');
    }
    return rangeArray;
  };
  const spot = state.entities.spots[ownProps.match.params.spotId] ? state.entities.spots[ownProps.match.params.spotId] : {bookings: []};
  const bookedDates = spot.bookings.map(bookId => {
    return createRangeArray(state.entities.bookings[bookId].start_date, state.entities.bookings[bookId].end_date);
  }).flat();
  return {
    bookedDates
  };
};

export default withRouter(connect(msp)(ShowCalendar));