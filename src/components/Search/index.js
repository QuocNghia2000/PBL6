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

const SearchComponent = ({data}) => {
  // console.log(data);
  const [dataFiltered, setDataFiltered] = React.useState({
    data: data,
    backup: data,
  });
  const navigation = useNavigation();

  const search = txt => {
    let text = txt.toLowerCase();
    let tracks = dataFiltered.backup;
    let filterTracks = tracks?.filter(item => {
      if (item.name.toLowerCase().match(text)) {
        return item;
      }
    });

    if (txt === '' || txt == null) {
      setDataFiltered({...dataFiltered, data: dataFiltered.backup});
    }
    setDataFiltered({...dataFiltered, data: filterTracks});
  };

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
      <SearchBar goBack={goBack} onChangeText={search} />
      {/* {loading && (
        <View>
          <ActivityIndicator
            style={styles.positionCenter}
            size="large"
            color="grey"
          />
        </View>
      )} */}
      <FlatList
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        data={dataFiltered.data}
        ListEmptyComponent={ListEmptyComponent}
        // horizontal={true}
      />
    </View>
  );
};

export default SearchComponent;
