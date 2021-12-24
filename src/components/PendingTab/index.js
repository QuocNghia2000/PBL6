import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ToastAndroid,
} from 'react-native';
import convertPrice from './../../constants/Reused/index';
import styles from '../PendingTab/styles';
import {GlobalContext} from './../../context/Provider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import updateStatus from '../../context/actions/order/updateStatus';

import {
  ADD_TO_ORDER_LIST,
  REMOVE_FROM_ORDER_LIST,
} from './../../constants/actionTypes/index';

const PendingTab = () => {
  const {
    orderDispatch,
    orderState: {
      getOrderList: {orderData, loading},
    },
  } = React.useContext(GlobalContext);

  const ListEmptyComponent = () => {
    return (
      <View style={styles.positionCenter}>
        <Text>No items to show</Text>
      </View>
    );
  };

  const render = ({item, index}) => {
    return (
      <View style={styles.itemOrder}>
        <Text style={styles.txtId}>Mã đơn hàng: {item._id}</Text>
        <FlatList
          renderItem={renderItem}
          keyExtractor={(baseItem, index1) => {
            return index1.toString();
          }}
          data={item?.orderDetails ? item?.orderDetails : []}
          ListEmptyComponent={ListEmptyComponent}
          // horizontal={true}
        />
        <View style={styles.bgTotal}>
          <MaterialIcons name="attach-money" size={25} color={'red'} />
          <Text style={styles.txtTotal}>
            {convertPrice(item.total.toString())} đ
          </Text>
        </View>
        <TouchableOpacity
          style={styles.btnBuy}
          onPress={() => {
            Alert.alert('Xóa', 'Bạn xác nhận đã nhận được đơn hàng này?', [
              {
                text: 'Không',
                onPress: () => {},
              },
              {
                text: 'OK',
                onPress: () => {
                  console.log('orderId: ', item);
                  orderDispatch({type: ADD_TO_ORDER_LIST, payload: item});
                  orderDispatch({type: REMOVE_FROM_ORDER_LIST, payload: item});
                  updateStatus(item._id);
                  ToastAndroid.show('Xác nhận thành công', ToastAndroid.SHORT);
                },
              },
            ]);
          }}>
          <Text style={styles.textBuy}>Đã nhận</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderItem = (baseItem, index1, item) => {
    return (
      <TouchableOpacity
        style={styles.bgItemProduct}
        onPress={() => {
          //   navigation.navigate(PRODUCT_DETAIL, {
          //     data: item.product,
          //   });
        }}>
        {baseItem.item.product.image && (
          <Image
            source={{uri: baseItem.item.product.image}}
            style={styles.itemImage}
          />
        )}
        <Text style={styles.textName}>{baseItem.item.product.name}</Text>
        <View style={styles.bgRight}>
          <Text style={styles.textQty}>x {baseItem.item.quantity}</Text>
          <View style={styles.bgMoney}>
            <MaterialIcons name="attach-money" size={20} color={'red'} />
            <Text style={styles.textPrice}>
              {convertPrice(baseItem.item.price.toString())} đ
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        extraData={orderData.filter(p => p.status === 'Pending')}
        renderItem={render}
        keyExtractor={(item, index1) => {
          return index1.toString();
        }}
        data={orderData.filter(p => p.status === 'Pending')}
        ListEmptyComponent={ListEmptyComponent}
        // horizontal={true}
      />
    </View>
  );
};

export default PendingTab;
