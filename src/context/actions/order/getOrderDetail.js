import {
  GET_ORDER_DETAIL_LOADING,
  GET_ORDER_DETAIL_FAIL,
  GET_ORDER_DETAIL_SUCCESS,
} from './../../../constants/actionTypes/index';

import axios from '../../../constants/axiosInstance/index';
// '6193752a82428adfd4e4278f'
export default orderID => dispatch => {
  dispatch({
    type: GET_ORDER_DETAIL_LOADING,
  });
  axios
    .get('/order/detail/' + orderID)
    .then(response => {
      // handle success
      console.log('listOrder: ', response.data);

      dispatch({type: GET_ORDER_DETAIL_SUCCESS, payload: response.data});
    })
    .catch(error => {
      // handle errornse);
      dispatch({type: GET_ORDER_DETAIL_FAIL, payload: error.response.data});
    });
};
