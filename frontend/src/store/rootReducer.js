import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { rootReducer as tasks } from './tasks';

export default combineReducers({
  form,
  tasks
});
