import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import convertPrice from './../../constants/Reused/index';
import styles from './styles';
import {GlobalContext} from './../../context/Provider';
import {useNavigation} from '@react-navigation/native';
import {FEEDBACK} from './../../constants/routeNames';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CompletedTab = ({navigate}) => {
  const navigation = useNavigation();

  const {
    orderState: {
      getOrderList: {orderData},
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
      </View>
    );
  };
  const renderItem = (baseItem, index1) => {
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
        {!baseItem.item.isFeedback && (
          <TouchableOpacity
            style={styles.btnBuy}
            visible={false}
            onPress={() => {
              if (!baseItem.item.isFeedback) {
                navigation.navigate(FEEDBACK, {
                  data: baseItem.item,
                });
              }
            }}>
            <Text style={styles.textBuy}>Đánh giá</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      {/* {loading ? (
        <ActivityIndicator style={{alignSelf: 'center'}} size="large" />
      ) :  */}
      <FlatList
        renderItem={render}
        keyExtractor={(item, index1) => {
          return index1.toString();
        }}
        data={orderData.filter(p => p.status === 'Completed')}
        ListEmptyComponent={ListEmptyComponent}
        // horizontal={true}
      />
    </View>
  );
};

export default CompletedTab;
