import { takeLatest } from 'redux-saga/effects';

import constant from '../../common/constant';
import { actionDefaultType } from '../../common/type';
import { workerServiceGetAPI } from './service.saga';

function* workerGetListPhoto(action: actionDefaultType) {
  yield workerServiceGetAPI({
    ...action,
    pathAPI: '/photos',
    typeSuccess: constant.GET_LIST_PHOTO_SUCCESS,
    typeFailure: constant.GET_LIST_PHOTO_FAILURE,
  });
}

export function* watcherGetListPhoto(): any {
  yield takeLatest(constant.GET_LIST_PHOTO_REQUEST, workerGetListPhoto);
}
