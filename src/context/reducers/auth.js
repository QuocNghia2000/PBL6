import {
  LOGIN_LOADING,
  LOGIN_FAIL,
  LOGIN_SUCESS,
} from './../../constants/actionTypes/index';

const auth = (state, {type, payload}) => {
  switch (type) {
    case LOGIN_LOADING:
      return {...state, loading: true};
    case LOGIN_SUCESS:
      return {...state, loading: false, id: payload, isLoggedIn: true};
    case LOGIN_FAIL:
      return {...state, loading: false, error: payload};
    default:
      return state;
  }
};

export default auth;
