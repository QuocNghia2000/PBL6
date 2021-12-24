import {
  LOGIN_LOADING,
  LOGIN_FAIL,
  LOGIN_SUCESS,
  GET_TOKEN,
} from './../../constants/actionTypes/index';

const auth = (state, {type, payload}) => {
  switch (type) {
    case LOGIN_LOADING:
      return {...state, loading: true};
    case LOGIN_SUCESS:
      return {...state, loading: false, id: payload, isLoggedIn: true};
    case LOGIN_FAIL:
      return {...state, loading: false, error: payload};
    case GET_TOKEN:
      return {
        ...state,
        loading: false,
        id: payload.id,
        cartId: payload.cartId,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default auth;
