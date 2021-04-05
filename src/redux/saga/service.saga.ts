import { put } from 'redux-saga/effects';

import constant from '../../common/constant';

type actionServiceGetTypes = {
  pathAPI: string,
  typeSuccess: string,
  typeFailure: string,
  detail?: {
    [key: string]: any,
  },
};

export function* workerServiceGetAPI(action: actionServiceGetTypes): any {
  try {
    const response = yield fetch(`${constant.host}${action.pathAPI}`);
    const data = yield response.json();

    switch (response.status) {
      case 200:
        return yield put({ type: action.typeSuccess, data, status: response.status, detail: action.detail });
      case 500:
        return yield put({ type: action.typeFailure, data: null, status: response.status, detail: action.detail });
      default:
        return yield put({ type: action.typeFailure, data: null, status: response.status, detail: action.detail });
    }
  } catch (error) {
    return yield put({
      type: action.typeFailure,
      data: null,
      status: error.status ? error.status : error,
      dateTime: new Date(),
      detail: action.detail,
    });
  }
}
