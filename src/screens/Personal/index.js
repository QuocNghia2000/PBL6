import React, {useContext, useEffect} from 'react';
import PersonalComponent from './../../components/Personal/index';
import {GlobalContext} from './../../context/Provider';
import {ToastAndroid} from 'react-native';
import GlobalProvider from '../../context/Provider';
import axios from '../../constants/axiosInstance/index';

const Personal = () => {
  const [form, setForm] = React.useState({});
  const [isData, setData] = React.useState(false);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };
  const {
    authState: {id},
  } = useContext(GlobalContext);
  const updateInfo = () => {
    if (id !== null) {
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
          ToastAndroid.show(
            'Cập nhật thông tin thành công!',
            ToastAndroid.SHORT,
          );
        })
        .catch(error => {
          // handle error
          console.log(error.response.data);
        });
    }
  };

  const isLoggedIn = () => {
    if (id !== null) {
      console.log(id);
      setData(true);
    }
  };
  const {
    personalState: {
      getInfo: {dataInfo, loading},
    },
  } = useContext(GlobalContext);
  useEffect(() => {
    isLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GlobalProvider>
      <PersonalComponent
        data={dataInfo}
        loading={loading}
        onChange={onChange}
        onSubmit={updateInfo}
        isLoggedIn={isData}
      />
    </GlobalProvider>
  );
};

export default Personal;
