import { call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import { getTasks, addTask } from '../../../api/tasks';

export function* fetchGetTasks({ date }) {
  try {
    yield put(actions.getTasksRequest());
    const tasks = yield call(getTasks, date);
    yield put(actions.getTasksSuccess(tasks));
  } catch (error) {
    const { status, statusText } = error;
    yield put(actions.getTasksFailure({ code: status, statusText }));
  }
}

export function* fetchAddTask({ data }) {
  try {
    yield put(actions.addTaskRequest());
    yield call(addTask, data);
    yield put(actions.addTaskSuccess());
  } catch (error) {
    const { status, statusText } = error;
    yield put(actions.addTaskFailure({ code: status, statusText }));
  }
}
