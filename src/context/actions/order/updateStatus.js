import {
  GET_ORDER_LIST_LOADING,
  GET_ORDER_LIST_FAIL,
  GET_ORDER_LIST_SUCCESS,
} from './../../../constants/actionTypes/index';

import axios from '../../../constants/axiosInstance/index';
// '6193752a82428adfd4e4278f'
export default orderDetailId => {
  // console.log('status:', status + '/' + userID);
  axios
    .put('/order/confirm/' + orderDetailId)
    .then(response => {
      // handle success
      console.log('updateStatus: ', response.data);
    })
    .catch(error => {
      // handle errornse);
    });
};
