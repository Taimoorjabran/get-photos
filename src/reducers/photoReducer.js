import {
  GET_PHOTO_REQUEST,
  GET_PHOTO_SUCCESS,
  GET_PHOTO_FAIL,
} from '../constants/photoConstants';

export const photoListReducer = (state = { photos: [] }, action) => {
  switch (action.type) {
    case GET_PHOTO_REQUEST:
      return { loading: true, photos: [] };
    case GET_PHOTO_SUCCESS:
      return { loading: false, photos: action.payload };
    case GET_PHOTO_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
