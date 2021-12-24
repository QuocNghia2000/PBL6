import {
  GET_ORDER_LIST_LOADING,
  GET_ORDER_LIST_FAIL,
  GET_ORDER_LIST_SUCCESS,
} from './../../../constants/actionTypes/index';

import axios from '../../../constants/axiosInstance/index';
// '6193752a82428adfd4e4278f'
export default (status, userID) => dispatch => {
  // console.log('status:', status + '/' + userID);
  dispatch({
    type: GET_ORDER_LIST_LOADING,
  });
  axios
    .get('/order/user/' + userID, {
      params: {
        status: status,
      },
    })
    .then(response => {
      // handle success
      // console.log('listOrder: ', response.data);

      dispatch({type: GET_ORDER_LIST_SUCCESS, payload: response.data});
    })
    .catch(error => {
      // handle errornse);
      dispatch({type: GET_ORDER_LIST_FAIL, payload: error.response.data});
    });
};
