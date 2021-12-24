import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import convertPrice from '../../constants/Reused/index';
import {PRODUCT_DETAIL} from './../../constants/routeNames';
import QuantityComponent from './../common/Quantity/index';

const OrderComponent = ({
  data,
  cartLoading,
  productsDispatch,
  onPress,
  loading,
}) => {
  const navigation = useNavigation();

  const ListEmptyComponent = () => {
    return (
      <View style={styles.positionCenter}>
        <Text>No items to show</Text>
      </View>
    );
  };

  const CaculateMoney = () => {
    let money = 0;
    data?.forEach(element => {
      money += parseInt(element.quantity) * parseInt(element.product.price);
    });
    return money.toString();
  };

  const renderItem = ({item}) => {
    //console.log('item :>>', item.name);
    const {image} = item.product;
    return (
      <TouchableOpacity
        style={styles.bgItemProduct}
        onPress={() => {
          navigation.navigate(PRODUCT_DETAIL, {
            data: item.product,
          });
        }}>
        {image && <Image source={{uri: image}} style={styles.itemImage} />}

        <View style={styles.bgRight}>
          <Text style={styles.textName}>{item.product.name}</Text>
          <Text style={styles.textPrice}>
            {convertPrice(item?.product?.price.toString())} đ
          </Text>
          <QuantityComponent qty={item.quantity} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <Ionicons
          name="arrow-back-outline"
          color="black"
          size={30}
          style={styles.back}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.txtTitle}>Thanh toán</Text>
      </View>

      <View style={styles.addressContainer}>
        <Ionicons
          name="location-outline"
          color="red"
          size={20}
          style={styles.iconAddress}
        />
        <View>
          <Text>Địa chỉ nhận hàng</Text>
          <Text>Lê QUốc Nghĩa 0379907174</Text>
          <Text>K142 Âu Cơ</Text>
        </View>
      </View>
      <View>
        <FlatList
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          data={data}
          ListEmptyComponent={ListEmptyComponent}
          style={styles.flatlist}
        />
      </View>
      <View style={styles.containerPrice}>
        <Text style={styles.txtTitlePrice}>Số tiền vận chuyển:</Text>
        <Text style={styles.txtPrice}>đ30.000</Text>
      </View>
      <View style={styles.containerPrice}>
        <Text style={styles.txtTitlePrice}>Tổng số tiền hàng:</Text>
        <Text style={[styles.txtPrice, {color: 'red'}]}>
          {convertPrice(CaculateMoney())} đ
        </Text>
      </View>
      <View style={styles.containerPrice}>
        <Text style={styles.txtTitlePrice}>Giảm giá:</Text>
        <Text style={[styles.txtPrice]}>Không</Text>
      </View>
      <View style={styles.containerOrder}>
        <View>
          <Text style={styles.txtTitlePrice}>Tổng thanh toán:</Text>
          <Text style={[styles.txtPrice, {color: 'red'}]}>
            {convertPrice((parseInt(CaculateMoney()) + 30000).toString())} đ
          </Text>
        </View>
      </View>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <TouchableOpacity
        style={styles.btnBuy}
        onPress={() => {
          onPress(parseInt(CaculateMoney()) + 30000);
        }}>
        <Text style={styles.textBuy}>Đặt hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderComponent;
