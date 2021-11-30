import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StatusBar,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {
  PRODUCT_DETAIL,
  SEARCH,
  SHOP_DETAIL,
  CATEGORY_DETAIL,
} from './../../constants/routeNames';
import SearchBar from './../../components/common/SearchBar/index';
import convertPrice from '../../constants/Reused/index';
import CustomFlatList from './../common/FlatList/index';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomeScreenComponent = ({
  data,
  loading,
  dataCategorites,
  loadingCategorites,
  shopData,
}) => {
  //console.log('data: ', data);
  const {navigate} = useNavigation();
  const navigation = useNavigation();
  const ListEmptyComponent = () => {
    return (
      <View style={styles.positionCenter}>
        <Text>No items to show</Text>
      </View>
    );
  };
  const gotoSearchScreen = () => {
    navigate(SEARCH);
  };
  const renderItemShop = ({item}) => {
    //console.log('item :>>', item.name);
    const {image} = item;
    return (
      <TouchableOpacity
        style={styles.bgItemProduct}
        onPress={() => {
          navigation.navigate(SHOP_DETAIL, {
            data: item,
          });
        }}>
        <View style={styles.itemShop}>
          {image && <Image source={{uri: image}} style={styles.imageShop} />}
          <Text style={styles.nameShop}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderItemCateGory = ({item}) => {
    //console.log('item :>>', item.name);
    const {image} = item;
    return (
      <TouchableOpacity
        style={styles.bgItemCategory}
        onPress={() => {
          navigation.navigate(CATEGORY_DETAIL, {
            data: item,
          });
        }}>
        {image && (
          <Image
            source={{
              uri: image,
            }}
            style={styles.imageCategory}
          />
        )}
        <Text style={styles.txtCategory}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SearchBar onPress={gotoSearchScreen} />
      <ScrollView>
        <View style={styles.bgItemShop}>
          <View style={styles.bgTitle}>
            <Text style={styles.titleShop}>CỬA HÀNG</Text>
            <TouchableOpacity
              style={styles.pressable}
              onPress={() => {
                //navigate(SHOP_DETAIL);
              }}>
              <Text style={styles.txtDetail}>Chi tiết ></Text>
            </TouchableOpacity>
          </View>
          <CustomFlatList
            data={shopData}
            renderItem={renderItemShop}
            //ListEmptyComponent={ListEmptyComponent}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
          />
        </View>
        <View style={styles.bgItemShop}>
          <View style={styles.bgTitle}>
            <Text style={styles.titleShop}>DANH MỤC</Text>
          </View>
          <CustomFlatList
            data={dataCategorites}
            renderItem={renderItemCateGory}
            //ListEmptyComponent={ListEmptyComponent}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
          />
        </View>

        {loading && (
          <View>
            <ActivityIndicator
              style={styles.positionCenter}
              size="large"
              color="grey"
            />
          </View>
        )}
        <View style={[styles.bgItemShop]}>
          <Text style={styles.titleShop}>ĐỀ XUẤT</Text>
        </View>
        {!loading &&
          data?.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.bgItemProduct}
              onPress={() => {
                navigation.navigate(PRODUCT_DETAIL, {
                  data: item,
                });
              }}>
              {item.image && (
                <Image source={{uri: item.image}} style={styles.itemImage} />
              )}

              <View style={styles.bgRight}>
                <Text style={styles.textName}>{item.name}</Text>
                <Text style={styles.textPrice}>
                  {convertPrice(item.price.toString())} đ
                </Text>
              </View>
              <FontAwesome5
                name="cart-plus"
                style={styles.cartIcon}
                onPress={() => {
                  alert('ok');
                }}
              />
              <TouchableOpacity style={styles.btnBuy}>
                <Text style={styles.textBuy}>Mua ngay</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreenComponent;
