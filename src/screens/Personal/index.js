import React, {useContext, useEffect} from 'react';
import PersonalComponent from './../../components/Personal/index';
import {GlobalContext} from './../../context/Provider';
import getInfo from '../../context/actions/personal/getInfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Personal = () => {
  const getData = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      getInfo(token)(personalDispatch);
    }
  };
  const {
    personalDispatch,
    personalState: {
      getInfo: {data, loading},
    },
  } = useContext(GlobalContext);
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <PersonalComponent data={data} loading={loading} />;
};

export default Personal;
