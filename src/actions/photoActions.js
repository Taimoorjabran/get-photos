import axios from 'axios';
import {
  GET_PHOTO_REQUEST,
  GET_PHOTO_SUCCESS,
  GET_PHOTO_FAIL,
} from '../constants/photoConstants';

const photoURL = 'https://picsum.photos/v2/list';

export const listPhotos = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PHOTO_REQUEST });
    const { data } = await axios.get(photoURL);
    dispatch({ type: GET_PHOTO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PHOTO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
