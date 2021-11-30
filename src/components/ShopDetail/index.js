import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ActivityIndicator,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import SearchBar from './../common/SearchBar/index';
import convertPrice from './../../constants/Reused/index';
import {useNavigation} from '@react-navigation/native';
import {PRODUCT_DETAIL, SEARCH} from './../../constants/routeNames';

const ShopDetailComponent = ({shopData, productData}) => {
  // console.log('shop: ', data);
  const [loading, setLoading] = React.useState(true);
  const navigation = useNavigation();

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const ListEmptyComponent = () => {
    return (
      <View>
        {loading ? (
          <ActivityIndicator
            style={styles.positionCenter}
            size="large"
            color="grey"
          />
        ) : (
          <View style={styles.positionCenter}>
            <Text>No items to show</Text>
          </View>
        )}
      </View>
    );
  };

  const renderItem = ({item}) => {
    // console.log('item ;>>', item.image);
    const {image} = item;
    return (
      <TouchableOpacity
        style={styles.bgItemProduct}
        onPress={() => {
          navigation.navigate(PRODUCT_DETAIL, {
            data: item,
          });
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
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      {/* <SearchBar goBack /> */}
      <ImageBackground
        source={require('../../assets/images/bg_shop.jpg')}
        style={styles.imageBg}>
        <View style={styles.bgLogo}>
          <Image
            width={70}
            height={70}
            source={{
              uri: shopData.image,
            }}
            style={styles.imageLogo}></Image>
          <Text style={styles.txtNameShop}>{shopData.name}</Text>
        </View>
      </ImageBackground>
      <Text style={styles.txtTitle}>Tất cả Sản Phẩm:</Text>
      {productData && (
        <FlatList
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          data={productData}
          ListEmptyComponent={ListEmptyComponent}
          // horizontal={true}
        />
      )}
    </View>
  );
};

export default ShopDetailComponent;
