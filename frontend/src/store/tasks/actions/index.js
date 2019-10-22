import types from './types';

export const getTasks = {
  type: types.GET_TASKS
};

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
