import { combineReducers } from 'redux';

import { getListPhoto, filterListPhoto } from './photo.reducers';

export default combineReducers({
  // photo
  getListPhoto,
  filterListPhoto,
});
