import { all } from 'redux-saga/effects';

import { watcherGetListPhoto } from './photo.saga';

export default function* rootSaga() {
  yield all([
    // photo
    watcherGetListPhoto(),
  ]);
}
