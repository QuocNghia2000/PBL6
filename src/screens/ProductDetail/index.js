import React from 'react';
import ProductDetailComponent from './../../components/ProductDetail/index';
import {GlobalContext} from './../../context/Provider';
import getFeedback from '../../context/actions/feedback/getFeedBack';
import getShopDetail from '../../context/actions/home/getShopByID';

const ProductDetail = ({route}) => {
  const itemData = route.params.data;
  const shopID = itemData.shop;
  const productID = itemData._id;
  const {
    productsDispatch,
    productsState: {
      getFeedback: {fbData, fbLoading},
      getShopDetail: {data, loading},
    },
  } = React.useContext(GlobalContext);

  React.useEffect(() => {
    getFeedback(productID)(productsDispatch);
    getShopDetail(shopID)(productsDispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ProductDetailComponent
      productData={itemData}
      shopData={data}
      loading={loading}
      fbLoading={fbLoading}
      fbData={fbData}
    />
  );
};

export default ProductDetail;
