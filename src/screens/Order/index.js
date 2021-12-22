import React from 'react';
import {ToastAndroid} from 'react-native';
import OrderComponent from './../../components/Order/index';
import {GlobalContext} from './../../context/Provider';
import addOrder from '../../context/actions/order/addOrder';
import addOrderDetail from '../../context/actions/order/addOrderDetail';
import {REMOVE_FROM_CART} from './../../constants/actionTypes/index';
import {useNavigation} from '@react-navigation/native';
import {BOTTOM_NAVIGATOR} from '../../constants/routeNames';

const OrderScreen = ({route}) => {
  const navigate = useNavigation();
  const itemData = route.params.data;
  const {
    personalState: {
      getInfo: {dataInfo},
    },
  } = React.useContext(GlobalContext);
  const {
    productsDispatch,
    productsState: {
      postOrder: {data, loading},
    },
  } = React.useContext(GlobalContext);

  const removeItemFromCart = product => {
    productsDispatch({
      type: REMOVE_FROM_CART,
      payload: product,
    });
  };

  const postOrder = total => {
    addOrder(dataInfo._id, total, dataInfo.address)(productsDispatch);
    if (data !== null) {
      console.log('orderID: ', data._id);
      itemData.forEach(element => {
        console.log('elêmnt: ', element);
        addOrderDetail(
          dataInfo._id,
          element.product._id,
          element.product.price,
          element.quantity,
        )(productsDispatch);
        removeItemFromCart(element.product);
      });
      ToastAndroid.show('Đặt đơn hàng thành công!', ToastAndroid.SHORT);
      navigate.goBack();
    }
  };
  // itemData.forEach(element => {
  //   console.log('elêmnt: ', element);
  //   //addOrderDetail(data._id, element._id, price, quantity)(productsDispatch);
  // });

  return (
    <OrderComponent
      data={itemData}
      onPress={postOrder}
      loading={loading}
      removeItemFromCart={removeItemFromCart}
    />
  );
};

export default OrderScreen;
