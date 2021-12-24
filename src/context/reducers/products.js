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
  REMOVE_FROM_CART,
  ADD_TO_CART,
  UPDATE_CART_QTY,
  GET_FEEDBACK_LOADING,
  GET_FEEDBACK_FAIL,
  GET_FEEDBACK_SUCCESS,
  GET_SHOP_DETAIL_LOADING,
  GET_SHOP_DETAIL_FAIL,
  GET_SHOP_DETAIL_SUCCESS,
  POST_ORDER_LOADING,
  POST_ORDER_FAIL,
  POST_ORDER_SUCCESS,
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
    case ADD_TO_CART:
      return {
        ...state,
        getCart: {
          ...state.getCart,
          cartData: [
            ...state.getCart.cartData,
            {product: {...payload}, quantity: 1},
          ],
          cartLoading: false,
          error: payload,
        },
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        getCart: {
          ...state.getCart,
          cartData: state.getCart.cartData.filter(
            p => p.product._id !== payload._id,
          ),
          cartLoading: false,
          error: payload,
        },
      };
    case UPDATE_CART_QTY:
      console.log('qty:', payload.qty);
      return {
        ...state,
        getCart: {
          ...state.getCart,
          cartData: state.getCart.cartData.filter(p =>
            p.product._id === payload.id
              ? (p.quantity = payload.qty)
              : p.quantity,
          ),
          cartLoading: false,
          error: payload,
        },
      };
    case GET_FEEDBACK_LOADING:
      return {
        ...state,
        getFeedback: {
          ...state.getFeedback,
          cartLoading: true,
        },
      };
    case GET_FEEDBACK_SUCCESS:
      return {
        ...state,
        getFeedback: {
          ...state.getFeedback,
          fbLoading: false,
          fbData: payload,
        },
      };
    case GET_FEEDBACK_FAIL:
      return {
        ...state,
        getFeedback: {
          ...state.getFeedback,
          fbLoading: false,
          error: payload,
        },
      };
    case GET_SHOP_DETAIL_LOADING:
      return {
        ...state,
        getShopDetail: {
          ...state.getShopDetail,
          fbLoading: true,
        },
      };
    case GET_SHOP_DETAIL_SUCCESS:
      return {
        ...state,
        getShopDetail: {
          ...state.getShopDetail,
          loading: false,
          data: payload,
        },
      };
    case GET_SHOP_DETAIL_FAIL:
      return {
        ...state,
        getShopDetail: {
          ...state.getShopDetail,
          loading: false,
          error: payload,
        },
      };
    case POST_ORDER_LOADING:
      return {
        ...state,
        postOrder: {
          ...state.postOrder,
          loading: true,
        },
      };
    case POST_ORDER_SUCCESS:
      return {
        ...state,
        postOrder: {
          loading: false,
          data: payload,
        },
      };
    case POST_ORDER_FAIL:
      return {
        ...state,
        postOrder: {
          ...state.postOrder,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};

export default products;
