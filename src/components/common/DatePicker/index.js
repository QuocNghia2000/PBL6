import React, {useState} from 'react';
import {View, Button, Platform, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DatePicker = ({onChangeDate}) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    const parseDate =
      tempDate.getDate() +
      '  /  ' +
      (tempDate.getMonth() + 1) +
      '  /  ' +
      tempDate.getFullYear();
    console.log(tempDate);
    onChangeDate(tempDate, parseDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      {/* <View>
        <Ionicons
          name="ios-calendar-outline"
          onPress={showDatepicker}
          style={{fontSize: 35}}></Ionicons>
      </View> */}
      {/* <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View> */}
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        //   mode={mode}
        //   is24Hour={true}
        display="spinner"
        onChange={onChange}
      />
    </View>
  );
};
export default DatePicker;
