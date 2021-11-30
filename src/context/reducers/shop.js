import {
  GET_SHOP_LOADING,
  GET_SHOP_SUCCESS,
  GET_SHOP_FAIL,
} from './../../constants/actionTypes/index';

const products = (state, {type, payload}) => {
  switch (type) {
    case GET_SHOP_LOADING:
      return {
        ...state,
        getShopByID: {
          ...state.getShopByID,
          loading: true,
        },
      };
    case GET_SHOP_SUCCESS:
      return {
        ...state,
        getShopByID: {
          ...state.getShopByID,
          loading: false,
          data: payload,
        },
      };
    case GET_SHOP_FAIL:
      return {
        ...state,
        getShopByID: {
          ...state.getShopByID,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};

export default products;
