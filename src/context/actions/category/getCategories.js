import {
  GET_CATEGORY_LOADING,
  GET_CATEGORY_FAIL,
  GET_CATEGORY_SUCCESS,
} from './../../../constants/actionTypes/index';

import axios from '../../../constants/axiosInstance/index';

export default () => dispatch => {
  dispatch({
    type: GET_CATEGORY_LOADING,
  });
  axios
    .get('/category')
    .then(response => {
      // handle success
      //console.log('INFOR: ', response.data);

      dispatch({type: GET_CATEGORY_SUCCESS, payload: response.data});
    })
    .catch(error => {
      // handle errornse);
      dispatch({type: GET_CATEGORY_FAIL, payload: error.response.data});
    });
};
