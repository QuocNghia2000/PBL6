import React, {createContext, useReducer} from 'react';
import auth from './reducers/auth';
import authInitialState from './initialsStates/authState';
import products from './reducers/products';
import productsInitialState from './initialsStates/productsInitialState';
import personal from './reducers/personal';
import personalInitialState from './initialsStates/personalInitialState';
import categories from './reducers/categories';
import categoryInitialState from './initialsStates/categoryInitialState';
import orderInitialState from './initialsStates/orderInitialState';
import order from './reducers/order';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [productsState, productsDispatch] = useReducer(
    products,
    productsInitialState,
  );
  const [personalState, personalDispatch] = useReducer(
    personal,
    personalInitialState,
  );
  const [categoryState, categoryDispatch] = useReducer(
    categories,
    categoryInitialState,
  );
  const [orderState, orderDispatch] = useReducer(order, orderInitialState);

  return (
    <GlobalContext.Provider
      value={{
        authState,
        productsState,
        personalState,
        categoryState,
        orderState,
        authDispatch,
        productsDispatch,
        personalDispatch,
        categoryDispatch,
        orderDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
