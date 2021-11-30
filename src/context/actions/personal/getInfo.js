import {
  GET_INFO_LOADING,
  GET_INFO_FAIL,
  GET_INFO_SUCCESS,
} from './../../../constants/actionTypes/index';

import axios from '../../../constants/axiosInstance/index';
// '6193752a82428adfd4e4278f'
export default id => dispatch => {
  dispatch({
    type: GET_INFO_LOADING,
  });
  axios
    .get('/user/' + id)

    .then(response => {
      // handle success
      //console.log('INFOR: ', response.data);

      dispatch({type: GET_INFO_SUCCESS, payload: response.data});
    })
    .catch(error => {
      // handle errornse);
      dispatch({type: GET_INFO_FAIL, payload: error.response.data});
    });
};
