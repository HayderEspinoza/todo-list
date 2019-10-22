import { connect } from 'react-redux';
import Home from './Home';
import { getTasks } from './../../store/tasks/actions';
import selectors from './../../store/tasks/reducers/selectors';

const mapStateToProps = state => {
  const selector = selectors(state);
  const tasks = selector.getTasks();
  const tasksStatus = selector.getTasksStatus();
  return { tasks, tasksStatus };
};

const mapDispatchToProps = dispatch => {
  return {
    getTasks: () => dispatch(getTasks)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
