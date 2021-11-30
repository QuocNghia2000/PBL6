import {
  GET_CART_LOADING,
  GET_CART_FAIL,
  GET_CART_SUCCESS,
} from './../../../constants/actionTypes/index';

import axios from '../../../constants/axiosInstance/index';

export default id => dispatch => {
  dispatch({
    type: GET_CART_LOADING,
  });
  axios
    .get('/cart/item/' + id)
    .then(response => {
      // handle success
      //console.log('response:', response.data);
      dispatch({type: GET_CART_SUCCESS, payload: response.data});
    })
    .catch(error => {
      // handle errornse);
      dispatch({type: GET_CART_FAIL, payload: error.response.data});
    });
};
