import { all, fork } from 'redux-saga/effects';
import { rootSaga as tasks } from './tasks';

export default function* rootSaga() {
  yield all([fork(tasks)]);
}
