import { initialStateType } from './type'

type constantTypes = {
  host: string | undefined,
  GET_LIST_PHOTO_REQUEST: string,
  GET_LIST_PHOTO_SUCCESS: string,
  GET_LIST_PHOTO_FAILURE: string,
  initialState: initialStateType,
};

const constant: constantTypes = {
  // environtment variable
  host: process.env.REACT_APP_HOST_API,
  // action type
  // - photo
  GET_LIST_PHOTO_REQUEST: 'GET_LIST_PHOTO_REQUEST',
  GET_LIST_PHOTO_SUCCESS: 'GET_LIST_PHOTO_SUCCESS',
  GET_LIST_PHOTO_FAILURE: 'GET_LIST_PHOTO_FAILURE',
  // state redux
  initialState: {},
};

export default constant;
