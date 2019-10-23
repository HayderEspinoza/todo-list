import { combineReducers } from 'redux';
import { createFetchStatusReducer } from '../../../utils/createReducers';
import types from '../actions/types';

export const getTasksFetchStatus = createFetchStatusReducer.forAllRegisters({
  FETCH: types.GET_TASKS,
  FETCH_REQUEST: types.GET_TASKS_REQUEST,
  FETCH_SUCCESS: types.GET_TASKS_SUCCESS,
  FETCH_FAILURE: types.GET_TASKS_FAILURE
});

export const addTaskFetchStatus = createFetchStatusReducer.forAllRegisters({
  FETCH: types.ADD_TASK,
  FETCH_REQUEST: types.ADD_TASK_REQUEST,
  FETCH_SUCCESS: types.ADD_TASK_SUCCESS,
  FETCH_FAILURE: types.ADD_TASK_FAILURE
});

export const entities = (state = null, action) => {
  const { tasks } = action;

  switch (action.type) {
    case types.GET_TASKS_SUCCESS:
      return tasks;
    case types.SET_TASKS:
      return tasks;
    default:
      return state;
  }
};

export default combineReducers({
  getTasksFetchStatus,
  addTaskFetchStatus,
  entities
});
