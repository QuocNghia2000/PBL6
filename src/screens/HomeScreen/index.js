import React, {useContext, useEffect} from 'react';
import HomeScreenComponent from './../../components/HomeScreen/index';
import {GlobalContext} from './../../context/Provider';
import getProducts from '../../context/actions/home/getProductList';
import getCategories from '../../context/actions/category/getCategories';
import getShops from '../../context/actions/home/getShops';

const HomeScreen = () => {
  const {
    productsDispatch,
    productsState: {
      getProducts: {data, loading},
      getShops: {shopData},
    },
  } = useContext(GlobalContext);
  const {
    categoryDispatch,
    categoryState: {
      getCategories: {dataCategorites, loadingCategorites},
    },
  } = useContext(GlobalContext);
  useEffect(() => {
    getProducts()(productsDispatch);
    getCategories()(categoryDispatch);
    getShops()(productsDispatch);
  }, [categoryDispatch, productsDispatch]);
  //console.log('data: ', shopData);
  //console.log('category: ', dataCategorites);

  return (
    <HomeScreenComponent
      data={data}
      loading={loading}
      dataCategorites={dataCategorites}
      loadingCategorites={loadingCategorites}
      shopData={shopData}
    />
  );
};

export default HomeScreen;
