import { createAction } from 'redux-actions';

import constant from '../../common/constant';

// photo
const fetchGetListPhoto = createAction(constant.GET_LIST_PHOTO_REQUEST);
const fetchFilterListPhoto = createAction(constant.LIST_PHOTO);

export {
  // photo
  fetchGetListPhoto,
  fetchFilterListPhoto,
};
