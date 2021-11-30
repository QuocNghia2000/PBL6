import {
  GET_SHOP_LOADING,
  GET_SHOP_FAIL,
  GET_SHOP_SUCCESS,
} from './../../../constants/actionTypes/index';

import axios from '../../../constants/axiosInstance/index';

export default () => dispatch => {
  dispatch({
    type: GET_SHOP_LOADING,
  });
  axios
    .get('/shop')
    .then(response => {
      // handle success
      dispatch({type: GET_SHOP_SUCCESS, payload: response.data});
    })
    .catch(error => {
      // handle errornse);
      dispatch({type: GET_SHOP_FAIL, payload: error.response.data});
    });
};
