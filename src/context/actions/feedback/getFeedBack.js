import {
  GET_FEEDBACK_LOADING,
  GET_FEEDBACK_FAIL,
  GET_FEEDBACK_SUCCESS,
} from './../../../constants/actionTypes/index';

import axios from '../../../constants/axiosInstance/index';

export default productId => dispatch => {
  dispatch({
    type: GET_FEEDBACK_LOADING,
  });
  axios
    .get('/product/feedback/' + productId)
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
