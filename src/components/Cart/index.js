import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import convertPrice from '../../constants/Reused/index';
import {PRODUCT_DETAIL, SEARCH} from './../../constants/routeNames';
import QuantityComponent from './../common/Quantity/index';

const CartComponent = ({cartData, cartLoading}) => {
  const navigation = useNavigation();

  const ListEmptyComponent = () => {
    return (
      <View style={styles.positionCenter}>
        <Text>No items to show</Text>
      </View>
    );
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
          <QuantityComponent />
        </View>
        <TouchableOpacity style={styles.btnBuy}>
          <Text style={styles.textBuy}>Mua ngay</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View style={styles.toolbar}>
        {/* <Ionicons
          name="arrow-back-outline"
          color="black"
          size={30}
          style={styles.back}
        /> */}
        <Text style={styles.txtTitle}>Giỏ hàng</Text>
      </View>
      {cartLoading && (
        <View>
          <ActivityIndicator
            style={styles.positionCenter}
            size="large"
            color="grey"
          />
        </View>
      )}
      {!cartLoading && (
        <FlatList
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          data={cartData}
          ListEmptyComponent={ListEmptyComponent}
          // horizontal={true}
        />
      )}
    </View>
  );
};

export default CartComponent;
