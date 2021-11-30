import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StatusBar,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {PRODUCT_DETAIL, SEARCH} from './../../constants/routeNames';
import SearchBar from './../../components/common/SearchBar/index';

import convertPrice from './../../constants/Reused/index';

const CategoryDetailComponent = ({data}) => {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(async () => {
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
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SearchBar goBack={goBack} />
      {data && (
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

export default CategoryDetailComponent;
