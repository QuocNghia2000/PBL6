import {
  GET_SHOP_DETAIL_LOADING,
  GET_SHOP_DETAIL_SUCCESS,
  GET_SHOP_DETAIL_FAIL,
} from './../../../constants/actionTypes/index';

import axios from '../../../constants/axiosInstance/index';
export default id => dispatch => {
  dispatch({
    type: GET_SHOP_DETAIL_LOADING,
  });
  axios
    .get('/shop/' + id)
    .then(response => {
      // handle success
      dispatch({type: GET_SHOP_DETAIL_SUCCESS, payload: response.data});
      //console.log('response: ', response.data);
    })
    .catch(error => {
      // handle errornse);
      dispatch({type: GET_SHOP_DETAIL_FAIL, payload: error.response.data});
    });
};
