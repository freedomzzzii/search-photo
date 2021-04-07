import { initialStateType, initialStateWithPayload } from './type'

type constantTypes = {
  host: string | undefined,
  GET_LIST_PHOTO_REQUEST: string,
  GET_LIST_PHOTO_SUCCESS: string,
  GET_LIST_PHOTO_FAILURE: string,
  LIST_PHOTO: string,
  initialState: initialStateType,
  initialStateWithPayload: initialStateWithPayload,
};

const constant: constantTypes = {
  // environtment variable
  host: process.env.REACT_APP_HOST_API,
  // action type
  // - photo
  GET_LIST_PHOTO_REQUEST: 'GET_LIST_PHOTO_REQUEST',
  GET_LIST_PHOTO_SUCCESS: 'GET_LIST_PHOTO_SUCCESS',
  GET_LIST_PHOTO_FAILURE: 'GET_LIST_PHOTO_FAILURE',
  LIST_PHOTO: 'LIST_PHOTO',
  // state redux
  initialState: {},
  initialStateWithPayload: {
    payload: [],
  },
};

export default constant;
