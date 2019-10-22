//import liraries
import React from 'react';

// create a component
const Task = props => {
  const { title, description } = props;
  return (
    <div className="column task">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

//make this component available to the app
export default Task;
