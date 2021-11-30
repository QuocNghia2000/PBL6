import React, {useState} from 'react';
import RegisterComponent from '../../components/Signup/index';
import axios from '../../constants/axiosInstance/index';
import {ToastAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from './../../constants/routeNames';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState(false);
  const navigate = useNavigation();

  const validateEmail = email => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      setErrors(prev => {
        return {...prev, [name]: null};
      });
    }
  };
  const submitRegister = form => {
    //console.log('info: ', form.username);
    axios
      .post('/user/register/', {
        username: form.username,
        password: form.password,
        fullName: form.fullname,
        phone: form.phone,
        gender: form.gender,
      })
      .then(response => {
        // handle success
        console.log('status: ', response.data);
        setResponse(true);
        ToastAndroid.show('Register Success', ToastAndroid.SHORT);
        navigate.replace(LOGIN);
      })
      .catch(error => {
        // handle error
        // console.log(error.response.data);
        error?.response?.data?.forEach(element => {
          //console.log(element.field);
          setErrors(prev => {
            return {...prev, username: element.error};
          });
        });
      });
  };
  const cacthError = () => {
    if (!form.username) {
      setErrors(prev => {
        return {...prev, username: 'Please enter your username'};
      });
      return false;
    }
    if (!validateEmail(form.username)) {
      setErrors(prev => {
        return {...prev, username: 'Invalid Email!'};
      });
      return false;
    }
    if (!form.fullname) {
      setErrors(prev => {
        return {...prev, fullname: 'Please enter your fullname'};
      });
      return false;
    }
    if (form.fullname.length < 3) {
      setErrors(prev => {
        return {...prev, fullname: 'Fullname at least 3 characters'};
      });
      return false;
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please enter your password'};
      });
      return false;
    }
    if (!form.confirmpass) {
      setErrors(prev => {
        return {...prev, confirmpass: 'Please enter your password'};
      });
      return false;
    }
    if (form.password.length < 6 || form.confirmpass.length < 6) {
      setErrors(prev => {
        return {...prev, password: 'Password at least 6 characters'};
      });
      return false;
    }
    if (form.password !== form.confirmpass) {
      setErrors(prev => {
        return {
          ...prev,
          password: 'Please check your password & confirm password',
        };
      });
      return false;
    }
    if (!form.phone) {
      setErrors(prev => {
        return {...prev, phone: 'Please enter your phone number'};
      });
      return false;
    }
    if (form.phone.length < 10) {
      setErrors(prev => {
        return {...prev, phone: 'Invalid phonenumber'};
      });
      return false;
    }

    return true;
  };
  const onSubmit = () => {
    // console.log('looix', form);
    if (cacthError()) {
      submitRegister(form);
    }
  };
  // React.useEffect(() => {
  //   if (response) {
  //     ToastAndroid.show('Register Success', ToastAndroid.SHORT);
  //     navigate(LOGIN);
  //   }
  // }, []);
  return (
    <RegisterComponent
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default Register;
