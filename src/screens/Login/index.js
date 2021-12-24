import React, {useState, useContext} from 'react';
import LoginComponent from '../../components/Login/index';
import {GlobalContext} from './../../context/Provider';
import loginUser from '../../context/actions/auth/loginUser';
import {useNavigation} from '@react-navigation/native';
import {SPLASH} from './../../constants/routeNames';

const Login = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {navigate} = useNavigation();

  const {
    authDispatch,
    authState: {id, error, loading},
  } = useContext(GlobalContext);
  // loginUser(form)(authDispatch);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      setErrors(prev => {
        return {...prev, [name]: null};
      });
    }
  };
  const setError = fieldError => {
    if (fieldError === 'username') {
      setErrors(prev => {
        return {...prev, username: 'Invalid username'};
      });
    } else if (fieldError === 'password') {
      setErrors(prev => {
        return {...prev, password: 'Invalid password'};
      });
    }
  };
  const onSubmit = () => {
    if (!form.username) {
      setErrors(prev => {
        return {...prev, username: 'Please enter your username'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please enter your password'};
      });
    }
    if (form.username && form.password) {
      loginUser(form)(authDispatch);
      setTimeout(() => {
        if (id !== null) {
          navigate(SPLASH);
        }
      }, 2000);
    }
  };
  return (
    <LoginComponent
      form={form}
      loading={loading}
      errors={errors}
      error={error}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default Login;
