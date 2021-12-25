import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'https://pbl6-seafood.herokuapp.com/api',
  timeout: 5000,
  headers: {'X-Custom-Header': 'foobar'},
});
instance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const getData = async () => {
  const token = await AsyncStorage.getItem('token');
  //console.log('token: ', token);
  if (token != null) {
    console.log('token', token);
    instance.defaults.headers.common.Authorization = 'Bearer ' + token;
  }
};
getData();
export default instance;
