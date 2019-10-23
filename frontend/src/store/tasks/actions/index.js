import types from './types';

export const getTasks = date => ({
  type: types.GET_TASKS,
  date
});

export const getTasksRequest = () => ({
  type: types.GET_TASKS_REQUEST
});

export const getTasksSuccess = tasks => ({
  type: types.GET_TASKS_SUCCESS,
  tasks
});

export const getTasksFailure = payload => ({
  type: types.GET_TASKS_FAILURE,
  payload
});

export const addTask = data => ({
  type: types.ADD_TASK,
  data
});

export const addTaskRequest = () => ({
  type: types.ADD_TASK_REQUEST
});

export const addTaskSuccess = () => ({
  type: types.ADD_TASK_SUCCESS
});

export const addTaskFailure = payload => ({
  type: types.ADD_TASK_FAILURE,
  payload
});
