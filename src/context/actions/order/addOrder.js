import {
  POST_ORDER_LOADING,
  POST_ORDER_FAIL,
  POST_ORDER_SUCCESS,
} from './../../../constants/actionTypes/index';

import axios from '../../../constants/axiosInstance/index';
// '6193752a82428adfd4e4278f'
export default ({userId, total, address}) =>
  dispatch => {
    dispatch({
      type: POST_ORDER_LOADING,
    });
    axios
      .post('/order/add', {
        userId: userId,
        total: total,
        shipperName: 'Mai Dũng',
        shipperPhone: '0458937856',
        address: address,
      })

      .then(response => {
        // handle success
        console.log('INFOR: ', response.data);

        dispatch({type: POST_ORDER_SUCCESS, payload: response.data});
      })
      .catch(error => {
        // handle errornse);
        dispatch({type: POST_ORDER_FAIL, payload: error.response.data});
      });
  };
