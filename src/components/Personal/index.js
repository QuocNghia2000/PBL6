import React from 'react';
import {View, Image, Text, ActivityIndicator} from 'react-native';
import styles from './styles';
import PersonalText from './../common/CustomText/index';
import CustomeButton from './../common/CustomButton/index';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PersonalComponent = ({data, loading}) => {
  return (
    <View>
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
        <View>
          <View style={styles.toolbar}>
            {/* <Ionicons
          name="arrow-back-outline"
          color="black"
          size={30}
          style={styles.back}
        /> */}
            <Text style={styles.txtTitle}>Sửa Thông tin</Text>
          </View>
          <View style={styles.bgAvatar}>
            <Image
              style={styles.avatar}
              source={require('../../assets/images/avatar_default.jpg')}
            />
          </View>
          <PersonalText label="Tên" value={data.name} />
          <PersonalText
            label="Tên Đăng nhập"
            value={data?.user?.username}
            enable
          />
          <View style={styles.distance} />

          <PersonalText label="Giới Tính" value="Chọn giới tính" enable />
          <PersonalText label="Ngày sinh" value="Chọn ngày sinh" enable />
          <View style={styles.distance} />

          <PersonalText label="Số điện thoại" value={data.phone} enable />
          <PersonalText label="Địa chỉ" value="Nhập địa chỉ của bạn" enable />
          <View style={styles.distance} />
          <PersonalText label="Thay đổi mật khẩu" value enable />
          <View style={styles.bgBtnSave}>
            <CustomeButton title="Lưu" primary disable />
          </View>
        </View>
      )}
    </View>
  );
};

export default PersonalComponent;
