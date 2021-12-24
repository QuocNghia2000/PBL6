import React from 'react';
import {ToastAndroid} from 'react-native';
import OrderComponent from './../../components/Order/index';
import {GlobalContext} from './../../context/Provider';
import addOrderDetail from '../../context/actions/order/addOrderDetail';
import {REMOVE_FROM_CART} from './../../constants/actionTypes/index';
import {useNavigation} from '@react-navigation/native';
import axios from '../../constants/axiosInstance/index';

const OrderScreen = ({route}) => {
  const navigate = useNavigation();
  const itemData = route.params.data;
  const [loading, setLoading] = React.useState(false);
  const {
    personalState: {
      getInfo: {dataInfo},
    },
  } = React.useContext(GlobalContext);
  const {
    productsDispatch,
    productsState: {},
  } = React.useContext(GlobalContext);

  const removeItemFromCart = product => {
    productsDispatch({
      type: REMOVE_FROM_CART,
      payload: product,
    });
  };

  const addOrder = (userId, total, address) => {
    setLoading(true);
    axios
      .post('/order/add', {
        userId: userId,
        total: total,
        shipperName: 'Mai Dũng',
        shipperPhone: '0458937856',
        address: address,
      })

      .then(response => {
        // handle success
        console.log('resAddOrder: ', response.data._id);
        if (response.data._id !== null) {
          itemData.forEach(element => {
            console.log('elêmnt: ', element.product);
            addOrderDetail(
              response.data._id,
              element.product._id,
              element.product.price,
              element.quantity,
            )(productsDispatch);
            removeItemInCart(element._id);
            removeItemFromCart(element.product);
          });
          setLoading(false);
          ToastAndroid.show('Đặt đơn hàng thành công!', ToastAndroid.SHORT);
          navigate.goBack();
        }
      })
      .catch(error => {
        // handle errornse);
      });
  };
  const removeItemInCart = id => {
    axios
      .delete('/cart/item/' + id)
      .then(response => {
        // handle success
        console.log('responseRemove:', response.data.msg);
        // dispatch({type: ADD_CART_SUCCESS, payload: response.data});
      })
      .catch(error => {
        // handle errornse);
        // dispatch({type: ADD_CART_FAIL, payload: error.response.data});
      });
  };

  const postOrder = total => {
    // console.log('idUser:', dataInfo.address);
    addOrder(dataInfo._id, total, dataInfo.address);
  };

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
