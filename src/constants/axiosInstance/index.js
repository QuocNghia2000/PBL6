import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'https://pbl6-seafood.herokuapp.com/api',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
});
const getData = async () => {
  const token = await AsyncStorage.getItem('token');
  console.log('token: ', token);
  if (token !== null) {
    instance.defaults.headers.common['Authorization'] =
      'Bearer ' + AsyncStorage.getItem('token');
  }
};
getData();
export default instance;
