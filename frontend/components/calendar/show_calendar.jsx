import React from 'react';
import { isInclusivelyAfterDay, DayPickerRangeController, isSameDay} from 'react-dates';
import moment from 'moment';



class ShowCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: 'startDate'
    };
    this.isDayBlocked = this.isDayBlocked.bind(this);
  }

  isDayBlocked(day1) {
    return this.props.bookedDates.some(day2 => {
      return isSameDay(day1, moment(day2));
    });
  }

    

  render() {
    const today = moment();
    
    return (
      <div className="date-picker-wrapper">
        <DayPickerRangeController
          onOutsideClick={DayPickerRangeController.onOutsideClick}
          onPrevMonthClick={DayPickerRangeController.onPrevMonthClick}
          onNextMonthClick={DayPickerRangeController.onNextMonthClick}
          noBorder={true}
          startDate={null} 
          endDate={null}
          onDatesChange={() => {}}
          focusedInput={null}
          onFocusChange={() => {}}
          numberOfMonths={2}
          isOutsideRange={day => isInclusivelyAfterDay(today, day)} 
          hideKeyboardShortcutsPanel
          isDayBlocked={this.isDayBlocked}
      />
      </div>
    );
  }
}

export default ShowCalendar;



