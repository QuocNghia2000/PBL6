import React from 'react';
import {View, Image, Text, ActivityIndicator, ScrollView} from 'react-native';
import styles from './styles';
import PersonalText from './../common/CustomText/index';
import CustomeButton from './../common/CustomButton/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from './../../components/common/DatePicker/index';
import CustomModal from './../common/Modal/index';

const PersonalComponent = ({data, loading, onSubmit, onChange}) => {
  const [date, setDate] = React.useState(
    data.birthday ? data.birthday : 'Chọn ngày sinh',
  );
  const [gender, setGender] = React.useState(
    data.gender ? data.gender : 'Chọn giới tính',
  );

  const [isShowDatePicker, setShowDatePicker] = React.useState(false);
  const [isShowGender, setShowGender] = React.useState(false);

  const onChangeDate = txt => {
    setDate(txt);
    setShowDatePicker(!isShowDatePicker);
    onChange({name: 'birthday', value: txt});
  };
  const onShowGenderModal = () => {
    setShowGender(!isShowGender);
  };
  const onChangeGender = () => {
    setGender(data.gender);
    return gender;
  };
  const onSaveGender = sex => {
    setShowGender(!isShowGender);
    setGender(sex);
    onChange({name: 'gender', value: sex});
  };

  const onPressDate = () => {
    setShowDatePicker(!isShowDatePicker);
  };
  return (
    <ScrollView>
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
          <PersonalText
            label="Tên"
            value={data.name}
            editable={true}
            onChangeText={value => {
              onChange({name: 'fullname', value: value});
            }}
          />
          <PersonalText
            label="Tên Đăng nhập"
            value={data?.user?.username}
            enable
            editable={false}
            maxLength={20}
          />
          <View style={styles.distance} />

          <PersonalText
            label="Giới Tính"
            value={data.gender ? data.gender : gender}
            enable
            onPress={onShowGenderModal}
            editable={false}
            placeholder="Chọn giới tính"
          />
          <CustomModal
            isShowGender={isShowGender}
            onPress={onShowGenderModal}
            onSaveGender={onSaveGender}
          />

          <PersonalText
            label="Ngày sinh"
            value={date}
            enable
            onPress={onPressDate}
            editable={false}
          />

          {isShowDatePicker && (
            <DatePicker
              onChangeDate={onChangeDate}
              isShowDatePicker={isShowDatePicker}
            />
          )}

          <View style={styles.distance} />

          <PersonalText
            label="Số điện thoại"
            value={data.phone ? data.phone : 'Nhập số điện thoại'}
            enable
            editable={true}
            keyboardType="numeric"
            maxLength={10}
            onChangeText={value => {
              onChange({name: 'phone', value: value});
            }}
          />
          <PersonalText
            label="Địa chỉ"
            value={data.address ? data.address : 'Nhập địa chỉ của bạn'}
            enable
            editable={true}
            onChangeText={value => {
              onChange({name: 'address', value: value});
            }}
          />
          <View style={styles.distance} />
          <PersonalText
            label="Thay đổi mật khẩu"
            value="***"
            enable
            editable={false}
          />
          <View style={styles.bgBtnSave}>
            <CustomeButton title="Lưu" primary disable onSubmit={onSubmit} />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default PersonalComponent;
