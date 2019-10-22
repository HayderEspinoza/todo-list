import { combineReducers } from 'redux';
import { createFetchStatusReducer } from '../../../utils/createReducers';
import types from '../actions/types';

export const getTasksFetchStatus = createFetchStatusReducer.forAllRegisters({
  FETCH: types.GET_CITIES,
  FETCH_REQUEST: types.GET_CITIES_REQUEST,
  FETCH_SUCCESS: types.GET_CITIES_SUCCESS,
  FETCH_FAILURE: types.GET_CITIES_FAILURE
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
  entities
});
