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

const ProductDetailComponent = ({productData, shopData}) => {
  const navigation = useNavigation();

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(async () => {
      setLoading(false);
    }, 1000);
  }, []);
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
        <View>
          <Text style={styles.txtTitleDes}>Mô tả Sản phẩm</Text>
          <Text style={styles.txtDes}>{productData.description}</Text>
          <Text style={styles.txtTitleDes}>
            Số lượng còn lại: {productData.quantity}
          </Text>
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
        <Text style={styles.txtTitleDes}>
          Số lượng còn lại: {productData.quantity}
        </Text>
        <View>
          <Text style={styles.txtTitleDes}>Đánh giá Sản phẩm</Text>
          <Text style={styles.txtDes}>Lượt thích: 5555</Text>
          <Text style={styles.txtDes}>Lượt bình luận: 1000</Text>

          <Text style={styles.txtDes}>
            Cá hồi nhập trực tiếp từ NAUY với chất lượng được kiểm soát nghiêm
            ngặt. Sở hữu thịt thơm ngon và giàu dinh dưỡng, thích hợp cho mọi
            đối tượng sử dụng. Thịt cá hồi vừa ngon, vừa không sợ béo,...
          </Text>
          <Text style={styles.txtDes}>
            Cá hồi nhập trực tiếp từ NAUY với chất lượng được kiểm soát nghiêm
            ngặt. Sở hữu thịt thơm ngon và giàu dinh dưỡng, thích hợp cho mọi
            đối tượng sử dụng. Thịt cá hồi vừa ngon, vừa không sợ béo,...
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetailComponent;
