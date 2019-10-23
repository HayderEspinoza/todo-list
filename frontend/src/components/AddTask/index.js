//import liraries
import React, { Component } from 'react';
import moment from 'moment';

// create a component
class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      date: new Date()
    };
  }

  addTask = () => {
    const { title, date } = this.state;
    if (title.length > 1) {
      this.props.addTask({ title, date: moment(date).format('MM-DD-YYYY') });
    } else {
      alert('Fields required');
    }
  };

  render() {
    return (
      <div className={'column'}>
        <div className="field columns">
          <div className="control is-6 column">
            <input
              className="input is-primary"
              type="text"
              placeholder="Description"
              value={this.state.title}
              onChange={event => this.setState({ title: event.target.value })}
            />
          </div>
          <div className="control is-4 column">
            <input
              className="input is-primary"
              type="date"
              placeholder="Primary input"
              onChange={event => this.setState({ date: event.target.value })}
            />
          </div>
          <div className="control is-2 column">
            <button className="button is-link" onClick={this.addTask}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

//make this component available to the app
export default AddTask;
