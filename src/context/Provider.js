import React, {createContext, useReducer} from 'react';
import auth from './reducers/auth';
import authInitialState from './initialsStates/authState';
import products from './reducers/products';
import productsInitialState from './initialsStates/productsInitialState';
import personal from './reducers/personal';
import personalInitialState from './initialsStates/personalInitialState';
import categories from './reducers/categories';
import categoryInitialState from './initialsStates/categoryInitialState';

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

  return (
    <GlobalContext.Provider
      value={{
        authState,
        productsState,
        personalState,
        categoryState,
        authDispatch,
        productsDispatch,
        personalDispatch,
        categoryDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
