import React from 'react';
import ShopDetailComponent from './../../components/ShopDetail/index';
import axios from '../../constants/axiosInstance/index';

const ShopDetail = ({route}) => {
  const itemData = route.params.data;
  const shopID = itemData._id;
  const [shopData, setShopData] = React.useState([]);
  const [productData, setProductData] = React.useState([]);
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
  const getProdcutByShopID = () => {
    axios
      .get('/product/shop/' + shopID)
      .then(response => {
        // handle success
        //console.log('response: ', response.data);
        setProductData(response.data);
      })
      .catch(error => {
        // handle errornse);
      });
  };
  React.useEffect(() => {
    getShopByID();
    getProdcutByShopID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log('data: ', shopData);
  return <ShopDetailComponent shopData={shopData} productData={productData} />;
};

export default ShopDetail;
