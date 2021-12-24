import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import convertPrice from '../../constants/Reused/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {SHOP_DETAIL} from '../../constants/routeNames';

const ProductDetailComponent = ({
  productData,
  shopData,
  fbLoading,
  fbData,
  loading,
}) => {
  const navigation = useNavigation();

  const getAverageRate = () => {
    let rate = 0;
    fbData?.forEach(element => {
      rate += parseInt(element.rate);
    });
    return rate;
  };
  console.log('length:', parseInt(getAverageRate() / parseInt(fbData.length)));

  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView>
        <Image
          width={70}
          height={70}
          source={{
            uri: productData.image,
          }}
          style={styles.image}
        />
        <Text style={styles.txtName}>{productData.name}</Text>
        <Text style={styles.txtPrice}>
          {convertPrice(productData.price.toString())} đ
        </Text>
        <View style={{marginLeft: 15}}>
          <Text style={styles.txtTitleDes}>Mô tả sản phẩm:</Text>
          <Text style={styles.txtDes}>{productData.description}</Text>
          {/* <Text style={styles.txtQty}>
            Số lượng còn lại: {productData.quantity}
          </Text> */}
        </View>
        {loading && (
          <View style={styles.bgShop}>
            <ActivityIndicator />
          </View>
        )}
        {!loading && (
          <View style={styles.bgShop}>
            <Image
              width={70}
              height={70}
              source={{
                uri: shopData.image,
              }}
              style={styles.imageShop}
            />

            <View style={styles.bgNameShop}>
              <Text style={styles.txtNameShop}>{shopData.name}</Text>
              <View style={styles.bgAddress}>
                <Ionicons name="location-outline" size={15} />
                <Text style={styles.txtAddress}>{shopData.address}</Text>
              </View>
              <View style={styles.bgAddress}>
                <Feather name="phone" size={15} />
                <Text style={styles.txtAddress}>{shopData.phone}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.btnGotoShop}
              onPress={() => {
                navigation.navigate(SHOP_DETAIL, {
                  data: shopData,
                });
              }}>
              <Text style={styles.txtGoto}> Xem Shop</Text>
            </TouchableOpacity>
          </View>
        )}
        {fbLoading ? (
          <ActivityIndicator />
        ) : (
          <View>
            <View>
              <View style={styles.txtTitleContainer}>
                <Text style={styles.txtTitleDes}>Đánh giá sản phẩm:</Text>
                {fbData.length > 0 &&
                  Array(parseInt(getAverageRate() / parseInt(fbData.length)))
                    ?.fill(1)
                    .map((rates, is) => (
                      <Ionicons
                        key={is}
                        name="md-star-sharp"
                        style={[
                          styles.userIcon,
                          {color: '#ff8d1c', marginLeft: 5},
                        ]}
                      />
                    ))}
                {getAverageRate() % fbData.length > 0 && (
                  <Ionicons
                    name="star-half-sharp"
                    style={[styles.userIcon, {color: '#ff8d1c', marginLeft: 5}]}
                  />
                )}
              </View>

              <Text style={styles.txtDes}>Lượt đánh giá: {fbData.length}</Text>
              {!loading &&
                fbData?.map((item, index) => (
                  <View key={index} style={styles.bgItemFb}>
                    <Ionicons
                      name="ios-person-circle"
                      style={styles.userIcon}
                    />
                    <View style={styles.containerFb}>
                      <Text style={styles.textName}>{item?.user.username}</Text>
                      <View
                        style={{flexDirection: 'row', alignContent: 'center'}}>
                        {Array(parseInt(item?.rate))
                          .fill(1)
                          .map((rate, i) => (
                            <Ionicons
                              key={i}
                              name="md-star-sharp"
                              style={[
                                styles.userIcon,
                                {color: '#ff8d1c', marginLeft: 5},
                              ]}
                            />
                          ))}
                      </View>
                      <Text style={[styles.textName, {color: 'black'}]}>
                        {item?.comment}
                      </Text>
                    </View>
                  </View>
                ))}
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default ProductDetailComponent;
