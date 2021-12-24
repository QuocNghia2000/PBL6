import {
  GET_FEEDBACK_LOADING,
  GET_FEEDBACK_FAIL,
  GET_FEEDBACK_SUCCESS,
} from './../../../constants/actionTypes/index';

import axios from '../../../constants/axiosInstance/index';

export default (orderDetailId, userId, comment, rate) => dispatch => {
  dispatch({
    type: GET_FEEDBACK_LOADING,
  });
  axios
    .post('/order/add/feedback/', {
      orderDetailId: orderDetailId,
      userId: userId,
      comment: comment,
      rate: rate,
    })
    .then(response => {
      // handle success
      //   console.log('response:', response.data);
      dispatch({type: GET_FEEDBACK_SUCCESS, payload: response.data});
    })
    .catch(error => {
      // handle errornse);
      dispatch({type: GET_FEEDBACK_FAIL, payload: error.response.data});
    });
};
