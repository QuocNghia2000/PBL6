import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {useContext, useEffect} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {PRODUCT_DETAIL, SEARCH} from './../../constants/routeNames';
import SearchBar from './../../components/common/SearchBar/index';
import {GlobalContext} from './../../context/Provider';
import getProducts from '../../context/actions/home/getProductList';
import convertPrice from './../../constants/Reused/index';

const SearchComponent = () => {
  const {
    productsDispatch,
    productsState: {
      getProducts: {data, loading},
    },
  } = useContext(GlobalContext);
  useEffect(() => {
    getProducts()(productsDispatch);
  }, [productsDispatch]);
  const navigation = useNavigation();

  const ListEmptyComponent = () => {
    return (
      <View style={styles.positionCenter}>
        <Text>No items to show</Text>
      </View>
    );
  };

  const goBack = () => {
    navigation.goBack();
  };

  const renderItem = ({item}) => {
    // console.log('item ;>>', item.image);
    const {image} = item;
    return (
      <TouchableOpacity
        style={styles.bgItemProduct}
        onPress={() => {
          //navigation.navigate(PRODUCT_DETAIL);
        }}>
        {image && <Image source={{uri: image}} style={styles.itemImage} />}

        <View style={styles.bgRight}>
          <Text style={styles.textName}>{item.name}</Text>
          <Text style={styles.textPrice}>
            {convertPrice(item.price.toString())} đ
          </Text>
        </View>
        <TouchableOpacity style={styles.btnBuy}>
          <Text style={styles.textBuy}>Mua ngay</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  return (
    <View style>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SearchBar goBack={goBack} />
      {loading && (
        <View>
          <ActivityIndicator
            style={styles.positionCenter}
            size="large"
            color="grey"
          />
        </View>
      )}
      {!loading && (
        <FlatList
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          data={data}
          ListEmptyComponent={ListEmptyComponent}
          // horizontal={true}
        />
      )}
    </View>
  );
};

export default SearchComponent;
