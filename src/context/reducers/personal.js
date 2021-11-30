import {
  GET_INFO_LOADING,
  GET_INFO_FAIL,
  GET_INFO_SUCCESS,
} from './../../constants/actionTypes/index';

const personal = (state, {type, payload}) => {
  switch (type) {
    case GET_INFO_LOADING:
      return {
        ...state,
        getInfo: {
          ...state.getInfo,
          loading: true,
        },
      };
    case GET_INFO_SUCCESS:
      return {
        ...state,
        getInfo: {
          ...state.getInfo,
          loading: false,
          data: payload,
        },
      };
    case GET_INFO_FAIL:
      return {
        ...state,
        getInfo: {
          ...state.getInfo,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};

export default personal;
