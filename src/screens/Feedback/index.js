import React from 'react';
import FeedbackComponent from '../../components/Feedback/index';
import axios from '../../constants/axiosInstance/index';
import {ToastAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from './../../context/Provider';

const FeedbackScreen = ({route}) => {
  const navigation = useNavigation();
  const itemData = route.params.data;
  const {
    personalState: {
      getInfo: {dataInfo},
    },
  } = React.useContext(GlobalContext);

  const addFeedback = (comment, rate) => {
    axios
      .post('/order/add/feedback/', {
        orderDetailId: itemData._id,
        userId: dataInfo.user._id,
        comment: comment,
        rate: rate,
      })
      .then(response => {
        // handle success
        // console.log('response:', response.data);
        ToastAndroid.show('Lưu đánh giá thành công', ToastAndroid.SHORT);
        navigation.goBack();
      })
      .catch(error => {
        // handle errornse);
      });
  };
  console.log('item:', itemData._id);
  return <FeedbackComponent addFeedback={addFeedback} data={itemData} />;
};

export default FeedbackScreen;
