import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_SHOP_LOADING,
  GET_SHOP_SUCCESS,
  GET_SHOP_FAIL,
  GET_CART_LOADING,
  GET_CART_FAIL,
  GET_CART_SUCCESS,
} from './../../constants/actionTypes/index';

const products = (state, {type, payload}) => {
  switch (type) {
    case GET_PRODUCTS_LOADING:
      return {
        ...state,
        getProducts: {
          ...state.getProducts,
          loading: true,
        },
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        getProducts: {
          ...state.getProducts,
          loading: false,
          data: payload,
        },
      };
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        getProducts: {
          ...state.getProducts,
          loading: false,
          error: payload,
        },
      };
    case GET_SHOP_LOADING:
      return {
        ...state,
        getShops: {
          ...state.getShops,
          loading: true,
        },
      };
    case GET_SHOP_SUCCESS:
      return {
        ...state,
        getShops: {
          ...state.getShops,
          loading: false,
          shopData: payload,
        },
      };
    case GET_SHOP_FAIL:
      return {
        ...state,
        getShops: {
          ...state.getShops,
          loading: false,
          error: payload,
        },
      };
    case GET_CART_LOADING:
      return {
        ...state,
        getCart: {
          ...state.getCart,
          cartLoading: true,
        },
      };
    case GET_CART_SUCCESS:
      return {
        ...state,
        getCart: {
          ...state.getCart,
          cartLoading: false,
          cartData: payload,
        },
      };
    case GET_CART_FAIL:
      return {
        ...state,
        getCart: {
          ...state.getCart,
          cartLoading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};

export default products;
