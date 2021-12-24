import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from '../Feedback/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import convertPrice from './../../constants/Reused/index';

const FeedbackComponent = ({addFeedback, data}) => {
  const navigation = useNavigation();
  const [txtComment, setTxtComment] = React.useState('');
  const [error, setError] = React.useState();
  const [checked, setChecked] = React.useState(Array(5).fill(true));
  const setIndexChange = index => {
    switch (index) {
      case 0:
        setChecked([true, false, false, false, false]);
        break;
      case 1:
        setChecked([true, true, false, false, false]);
        break;
      case 2:
        setChecked([true, true, true, false, false]);
        break;
      case 3:
        setChecked([true, true, true, true, false]);
        break;
      case 4:
        setChecked(Array(5).fill(true));
        break;

      default:
        break;
    }
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
        <Text style={styles.txtTitle}>Đánh giá sản phẩm</Text>
        <TouchableOpacity
          style={styles.bgSave}
          onPress={() => {
            const rate = checked.filter(p => p === true).length;
            if (txtComment.length > 10) {
              addFeedback(txtComment, rate);
            } else {
              setError('Không được nhập dưới 10 kí tự');
            }
          }}>
          <Text style={styles.txtSave}>Lưu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerProduct}>
        {data.product.image && (
          <Image source={{uri: data.product.image}} style={styles.itemImage} />
        )}
        <Text style={styles.textName}>{data.product.name}</Text>
        <View style={styles.bgRight}>
          <Text style={styles.textQty}>x {data.quantity}</Text>
          <View style={styles.bgMoney}>
            <MaterialIcons name="attach-money" size={20} color={'red'} />
            <Text style={styles.textPrice}>
              {convertPrice(data.price.toString())} đ
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bgStar}>
        {checked.map((rates, index) =>
          rates ? (
            <AntDesign
              key={index}
              name="star"
              style={styles.starIcon}
              onPress={() => {
                setIndexChange(index);
              }}
            />
          ) : (
            <AntDesign
              key={index}
              name="staro"
              style={styles.starIcon}
              onPress={() => {
                setIndexChange(index);
              }}
            />
          ),
        )}
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Mời đánh giá sản phẩm"
        maxLength={200}
        onChangeText={value => {
          if (value === '' || value.length > 10) {
            setError();
          }
          setTxtComment(value);
        }}
      />
      {error && <Text style={styles.txtEror}>{error}</Text>}
    </View>
  );
};

export default FeedbackComponent;
