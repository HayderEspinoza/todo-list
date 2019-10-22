//import liraries
import React, { PureComponent } from 'react';

// create a component
class DateFilter extends PureComponent {
  prevMonth = () => {
    alert('move month');
  };

  nextMonth = () => {
    alert('move month');
  };

  render() {
    return (
      <div>
        <div className={'month'}>
          <div onClick={this.prevMonth} className={'month__prev month__item'}>
            icon prev
          </div>
          <div className={'month__name month__item'}>month name</div>
          <div onClick={this.nextMonth} className={'month__next month__item'}>
            icon next
          </div>
        </div>
        <div className={'days'}>
          <div className={'wrap-day'}>
            <div>M</div>
            <div>1</div>
          </div>
          <div className={'wrap-day'}>
            <div>T</div>
            <div>2</div>
          </div>
          <div className={'wrap-day'}>
            <div>W</div>
            <div>3</div>
          </div>
          <div className={'wrap-day'}>
            <div>T</div>
            <div>4</div>
          </div>
          <div className={'wrap-day'}>
            <div>F</div>
            <div>5</div>
          </div>
          <div className={'wrap-day'}>
            <div>S</div>
            <div>6</div>
          </div>
          <div className={'wrap-day'}>
            <div>S</div>
            <div>7</div>
          </div>
        </div>
      </div>
    );
  }
}

//make this component available to the app
export default DateFilter;
