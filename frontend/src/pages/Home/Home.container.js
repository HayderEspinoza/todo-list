import { connect } from 'react-redux';
import Home from './Home';
import { getTasks, addTask } from './../../store/tasks/actions';
import selectors from './../../store/tasks/reducers/selectors';

const mapStateToProps = state => {
  const selector = selectors(state);
  const tasks = selector.getTasks();
  const tasksStatus = selector.getTasksStatus();
  const addTaskStatus = selector.addTaskStatus();
  return { tasks, tasksStatus, addTaskStatus };
};

const mapDispatchToProps = dispatch => {
  return {
    getTasks: date => dispatch(getTasks(date)),
    addTask: data => dispatch(addTask(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
