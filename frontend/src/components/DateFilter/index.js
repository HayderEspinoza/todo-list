//import liraries
import React, { Component } from 'react';
import KeyboardArrowLeft from 'material-react-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-react-icons/KeyboardArrowRight';
import moment from 'moment';

// create a component
class DateFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateSelected: moment()
    };
  }

  prevMonth = () => {
    let { dateSelected } = this.state;
    dateSelected = dateSelected.subtract(7, 'days');
    this.selectDay(dateSelected);
  };

  nextMonth = () => {
    let { dateSelected } = this.state;
    dateSelected = dateSelected.add(7, 'days');
    this.selectDay(dateSelected);
  };

  isSelected = (dayIterator, daySelected) => {
    return dayIterator.format('DD') === daySelected.format('DD')
      ? 'day__selected'
      : '';
  };

  selectDay = dateSelected => {
    this.setState({ dateSelected });
    this.props.filter(dateSelected);
  };

  renderDay = () => {
    let days = [];
    let { dateSelected } = this.state;
    let startWeek = moment(dateSelected)
      .weekday(1)
      .startOf('week');

    for (let index = 0; index < 7; index++) {
      days.push(moment(startWeek).add(index, 'days'));
    }

    days = days.map((item, index) => {
      return (
        <div
          className={`day ${this.isSelected(item, dateSelected)}`}
          key={index}
          onClick={() => this.selectDay(item)}
        >
          <p className={'day__name'}>{item.format('ddd').toUpperCase()}</p>
          <p className={'day__number'}>{item.format('DD')}</p>
        </div>
      );
    });

    return days;
  };

  render() {
    const { dateSelected } = this.state;
    return (
      <div>
        <div className={'month'}>
          <a
            href="#"
            onClick={this.prevMonth}
            className={'month__prev month__item'}
          >
            <KeyboardArrowLeft />
          </a>
          <div className={'month__name month__item'}>
            {dateSelected.format('MMMM').toUpperCase()}
          </div>
          <a
            href="#"
            onClick={this.nextMonth}
            className={'month__next month__item'}
          >
            <KeyboardArrowRight />
          </a>
        </div>

        <div className={'days'}>{this.renderDay()}</div>
      </div>
    );
  }
}

//make this component available to the app
export default DateFilter;
