import {
  GET_PRODUCT_BY_CATEGORY_LOADING,
  GET_PRODUCT_BY_CATEGORY_FAIL,
  GET_PRODUCT_BY_CATEGORY_SUCCESS,
} from './../../../constants/actionTypes/index';

import axios from '../../../constants/axiosInstance/index';

export default id => dispatch => {
  dispatch({
    type: GET_PRODUCT_BY_CATEGORY_LOADING,
  });
  axios
    .get('product/category/' + id)
    .then(response => {
      // handle success
      //console.log('INFOR: ', response.data);

      dispatch({type: GET_PRODUCT_BY_CATEGORY_SUCCESS, payload: response.data});
    })
    .catch(error => {
      // handle errornse);
      dispatch({
        type: GET_PRODUCT_BY_CATEGORY_FAIL,
        payload: error.response.data,
      });
    });
};
