//import libraries
import React, { PureComponent } from 'react';
import DateFilter from '../../components/DateFilter';
import PropTypes from 'prop-types';
import TasksList from './TasksList';

// create a component

// create a component
class Home extends PureComponent {
  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    const { setDate, tasks, tasksStatus } = this.props;

    return (
      <div className="columns is-mobile is-centered">
        <div className="column is-half home">
          <DateFilter setDate={setDate} />
          {tasksStatus === 'loaded' && <TasksList tasks={tasks} />}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  setDate: PropTypes.func,
  tasksStatus: PropTypes.string
};

//make this component available to the app
export default Home;
