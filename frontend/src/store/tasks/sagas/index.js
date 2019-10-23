import { takeLatest } from 'redux-saga/effects';
import types from '../actions/types';
import { fetchGetTasks, fetchAddTask } from './fetch';

export default function* root() {
  yield takeLatest(types.GET_TASKS, fetchGetTasks);
  yield takeLatest(types.ADD_TASK, fetchAddTask);
}
