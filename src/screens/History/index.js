import React from 'react';
import HistorysComponent from './../../components/History/index';
import {GlobalContext} from './../../context/Provider';
import {useNavigation} from '@react-navigation/native';
import getOrders from '../../context/actions/order/getOrders';

const History = () => {
  const navigation = useNavigation();
  const {
    personalState: {
      getInfo: {dataInfo},
    },
    orderDispatch,
    orderState: {
      getOrderList: {orderData, loading},
    },
  } = React.useContext(GlobalContext);

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      getOrders('Pending', dataInfo._id)(orderDispatch);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataInfo._id, orderDispatch]);

  return <HistorysComponent loading={loading} />;
};

export default History;
