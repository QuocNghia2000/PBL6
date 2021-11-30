import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCESS,
} from './../../../constants/actionTypes/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../../constants/axiosInstance/index';
import {decode as atob} from 'base-64';

export default ({password, username}) =>
  dispatch => {
    dispatch({type: LOGIN_LOADING});
    axios
      .post('/user/login/', {
        username: username,
        password: password,
      })
      .then(response => {
        // handle success
        console.log(
          'dds',
          JSON.parse(atob(response.data.split('.')[1])).cartId,
        );

        try {
          AsyncStorage.setItem(
            'token',
            JSON.parse(atob(response.data.split('.')[1])).id,
          );
          AsyncStorage.setItem(
            'cartID',
            JSON.parse(atob(response.data.split('.')[1])).cartId,
          );
        } catch (e) {
          // saving error
        }

        dispatch({
          type: LOGIN_SUCESS,
          payload: JSON.parse(atob(response.data.split('.')[1])).id,
        });
      })
      .catch(error => {
        // handle error
        if (error !== null) {
          console.log(error.response.data[0].error);
          dispatch({type: LOGIN_FAIL, payload: error.response.data[0].error});
        }
      });
  };
