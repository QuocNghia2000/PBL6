import {
  GET_CATEGORY_LOADING,
  GET_CATEGORY_FAIL,
  GET_CATEGORY_SUCCESS,
  GET_PRODUCT_BY_CATEGORY_LOADING,
  GET_PRODUCT_BY_CATEGORY_FAIL,
  GET_PRODUCT_BY_CATEGORY_SUCCESS,
} from './../../constants/actionTypes/index';

const categories = (state, {type, payload}) => {
  switch (type) {
    case GET_CATEGORY_LOADING:
      return {
        ...state,
        getCategories: {
          ...state.getCategories,
          loadingCategorites: true,
        },
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        getCategories: {
          ...state.getCategories,
          loadingCategorites: false,
          dataCategorites: payload,
        },
      };
    case GET_CATEGORY_FAIL:
      return {
        ...state,
        getCategories: {
          ...state.getCategories,
          loadingCategorites: false,
          error: payload,
        },
      };
    case GET_PRODUCT_BY_CATEGORY_LOADING:
      return {
        ...state,
        getProductByCategoryID: {
          ...state.getProductByCategoryID,
          loading: true,
        },
      };
    case GET_PRODUCT_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        getProductByCategoryID: {
          ...state.getProductByCategoryID,
          loading: false,
          data: payload,
        },
      };
    case GET_PRODUCT_BY_CATEGORY_FAIL:
      return {
        ...state,
        getProductByCategoryID: {
          ...state.getProductByCategoryID,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default categories;
