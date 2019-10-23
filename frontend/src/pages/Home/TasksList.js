//import liraries
import React from 'react';
import Task from '../../components/Task';
import PropTypes from 'prop-types';

// create a component
const TasksList = props => {
  const { tasks, finishTask } = props;

  return (
    <div className={'task-list'}>
      {tasks.map((item, index) => {
        const { title, description } = item;
        return (
          <Task
            key={index}
            title={title}
            description={description}
            finishTask={finishTask}
          />
        );
      })}
    </div>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.array
};

//make this component available to the app
export default TasksList;
