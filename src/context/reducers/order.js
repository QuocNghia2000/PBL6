import {
  GET_ORDER_LIST_FAIL,
  GET_ORDER_LIST_SUCCESS,
  GET_ORDER_LIST_LOADING,
  ADD_TO_ORDER_LIST,
  REMOVE_FROM_ORDER_LIST,
} from './../../constants/actionTypes/index';

const orderReducer = (state, {type, payload}) => {
  switch (type) {
    case GET_ORDER_LIST_LOADING:
      return {
        ...state,
        getOrderList: {
          ...state.getOrderList,
          loading: true,
        },
      };
    case GET_ORDER_LIST_SUCCESS:
      return {
        ...state,
        getOrderList: {
          ...state.getOrderList,
          loading: false,
          orderData: payload,
        },
      };
    case GET_ORDER_LIST_FAIL:
      return {
        ...state,
        getOrderList: {
          ...state.getOrderList,
          loading: false,
          error: payload,
        },
      };
    case ADD_TO_ORDER_LIST:
      return {
        ...state,
        getOrderList: {
          ...state.getOrderList,
          orderData: [
            ...state.getOrderList.orderData,
            {...payload, status: 'Completed'},
          ],
          loading: false,
          error: payload,
        },
      };
    case REMOVE_FROM_ORDER_LIST:
      console.log('item: ', payload);
      return {
        ...state,
        getOrderList: {
          ...state.getOrderList,
          orderData: state.getOrderList.orderData.filter(
            p => p._id !== payload._id || p.status === 'Completed',
          ),
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};

export default orderReducer;
