//import libraries
import React, { PureComponent } from 'react';
import DateFilter from '../../components/DateFilter';
import PropTypes from 'prop-types';
import TasksList from './TasksList';
import momment from 'moment';
import AddTask from '../../components/AddTask';

// create a component
class Home extends PureComponent {
  componentDidMount() {
    this.props.getTasks(momment().format('MM-DD-YYYY'));
  }

  componentWillUpdate(nextProps) {
    if (
      nextProps.addTaskStatus === 'loaded' &&
      this.props.addTaskStatus !== nextProps.addTaskStatus
    ) {
      this.filter(momment());
    }
  }

  filter = date => {
    this.props.getTasks(date.format('MM-DD-YYYY'));
  };

  render() {
    const { setDate, tasks, tasksStatus, finishTask, addTask } = this.props;

    return (
      <div className="columns is-mobile is-centered">
        <div className="column is-half home">
          <AddTask addTask={addTask} />
          <DateFilter setDate={setDate} filter={this.filter} />
          {tasksStatus === 'loaded' && (
            <TasksList tasks={tasks} finishTask={finishTask} />
          )}
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
