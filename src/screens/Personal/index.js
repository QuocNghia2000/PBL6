import React, {useContext, useEffect} from 'react';
import PersonalComponent from './../../components/Personal/index';
import {GlobalContext} from './../../context/Provider';
import getInfo from '../../context/actions/personal/getInfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {decode as atob} from 'base-64';
import {ToastAndroid} from 'react-native';
import GlobalProvider from '../../context/Provider';
import axios from '../../constants/axiosInstance/index';

const Personal = () => {
  const [form, setForm] = React.useState({});

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };
  let id;
  const updateInfo = async () => {
    const token = await AsyncStorage.getItem('token');
    //console.log('token: ', token);
    if (token !== null) {
      id = JSON.parse(atob(token.toString().split('.')[1])).id;
      //console.log('token: ', id);
    }
    console.log('info: ', form);

    axios
      .put('/user/' + id, {
        name: form.fullname,
        phone: form.phone,
        address: form.address,
        gender: form.gender,
        birthday: form.birthday,
      })
      .then(response => {
        // handle success
        console.log('res: ', response.data.msg);
        ToastAndroid.show('Cập nhật thông tin thành công!', ToastAndroid.SHORT);
      })
      .catch(error => {
        // handle error
        console.log(error.response.data);
      });
  };

  const getData = async () => {
    const token = await AsyncStorage.getItem('token');
    //console.log('token: ', token);
    if (token !== null) {
      const id = JSON.parse(atob(token.toString().split('.')[1])).id;
      //console.log('token: ', id);
      getInfo(id)(personalDispatch);
    }
  };
  const {
    personalDispatch,
    personalState: {
      getInfo: {dataInfo, loading},
    },
  } = useContext(GlobalContext);
  // useEffect(() => {
  //   getData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <GlobalProvider>
      <PersonalComponent
        data={dataInfo}
        loading={loading}
        onChange={onChange}
        onSubmit={updateInfo}
      />
    </GlobalProvider>
  );
};

export default Personal;
