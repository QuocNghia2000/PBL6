import React from 'react';
import ProductDetailComponent from './../../components/ProductDetail/index';
import axios from '../../constants/axiosInstance/index';

const ProductDetail = ({route}) => {
  const itemData = route.params.data;
  const shopID = itemData.shop;
  const [shopData, setShopData] = React.useState([]);
  //console.log('item', itemData.shop);
  const getShopByID = () => {
    axios
      .get('/shop/' + shopID)
      .then(response => {
        // handle success
        //console.log('response: ', response.data);
        setShopData(response.data);
      })
      .catch(error => {
        // handle errornse);
      });
  };
  React.useEffect(() => {
    getShopByID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <ProductDetailComponent productData={itemData} shopData={shopData} />;
};

export default ProductDetail;
