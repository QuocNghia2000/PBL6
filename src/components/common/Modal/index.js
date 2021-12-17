import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import RadioButton from './../RadioButton/RadioGroup';
import colors from '../../../assets/theme/colors';

const CustomModal = ({isShowGender, onPress, onSaveGender}) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selected, setSelected] = React.useState();
  const [gender, setGender] = React.useState();

  const options = ['Nam', 'Nữ'];
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isShowGender}
        onRequestClose={onPress}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <RadioButton
              selected={selected}
              options={options}
              onChangeSelected={(opt, index) => {
                setSelected(index);
                setGender(opt);
                console.log(opt);
              }}
            />
            <View style={styles.bgConf}>
              <TouchableOpacity
                style={[styles.btnNo, {backgroundColor: 'red'}]}
                onPress={onPress}>
                <Text style={styles.text}>Không</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btnNo, {backgroundColor: colors.green}]}
                onPress={() => {
                  onSaveGender(gender);
                }}>
                <Text style={styles.text}>Lưu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  btnNo: {
    width: 80,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 15,
  },
  bgConf: {
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  modalText: {borderBottomWidth: 1, borderBottomColor: 'black'},
  textInput: {
    width: 80,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    alignSelf: 'center',
    fontSize: 15,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default CustomModal;
