import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
} from './../../../constants/actionTypes/index';

import axios from '../../../constants/axiosInstance/index';

export default () => dispatch => {
  dispatch({
    type: GET_PRODUCTS_LOADING,
  });
  axios
    .get('/product')
    .then(response => {
      // handle success
      dispatch({type: GET_PRODUCTS_SUCCESS, payload: response.data});
    })
    .catch(error => {
      // handle errornse);
      dispatch({type: GET_PRODUCTS_FAIL, payload: error.response.data});
    });
};
