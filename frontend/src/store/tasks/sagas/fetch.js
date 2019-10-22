import { call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import { getTasks } from '../../../api/tasks';

export function* fetchGetTasks() {
  try {
    yield put(actions.getTasksRequest());
    const tasks = yield call(getTasks);
    yield put(actions.getTasksSuccess(tasks));
  } catch (error) {
    const { status, statusText } = error;
    yield put(actions.getTasksFailure({ code: status, statusText }));
  }
}
