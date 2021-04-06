import constant from '../../common/constant';
import { actionDefaultType, actionDefaultWithPayloadType } from '../../common/type'

export const getListPhoto = (state = constant.initialState, action: actionDefaultType) => {
  switch (action.type) {
    case constant.GET_LIST_PHOTO_REQUEST:
      return Object.assign({}, state, { ...action });
    case constant.GET_LIST_PHOTO_SUCCESS:
      return Object.assign({}, state, { ...action });
    case constant.GET_LIST_PHOTO_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state ? state : constant.initialState;
  }
};

export const filterListPhoto = (state = constant.initialStateWithPayload, action: actionDefaultWithPayloadType) => {
  switch (action.type) {
    case constant.LIST_PHOTO:
      return Object.assign({}, state, { ...action });
    default:
      return state ? state : constant.initialStateWithPayload;
  }
};
