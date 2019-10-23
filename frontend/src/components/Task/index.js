//import liraries
import React from 'react';
import { COLORS } from '../../utils/constants';

// create a component
const Task = props => {
  const { title, description, _id: taskId, finishTask, finished } = props;
  const color = COLORS[Math.floor(Math.random() * (COLORS.length - 1))];
  const lineThrough = finished ? { textDecorationLine: 'line-through' } : {};

  return (
    <div
      className="task columns"
      style={{ borderLeftColor: color }}
      onClick={() => finishTask(taskId)}
    >
      <div className="column is-10">
        <h4 style={lineThrough}>{title}</h4>
        <p className={'task__description'} style={lineThrough}>
          {description}
        </p>
      </div>
    </div>
  );
};

//make this component available to the app
export default Task;
