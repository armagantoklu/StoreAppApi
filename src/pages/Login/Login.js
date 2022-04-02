import React from 'react';
import { View, Image } from 'react-native';
import styles from './Login.styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Formik } from 'formik';
const URL1 = 'https://fakestoreapi.com/auth/login';
import UsePost from './../../../src/hooks/usePost';
import Error from './../../components/Error';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
const user = {
    address: {
        geolocation: {
            lat: "50.3467",
            long: "-20.1310"
        },
        city: "San Antonio",
        street: "Hunters Creek Dr",
        number: 6454,
        zipcode: "98234-1734"
    },
    id: 4,
    email: "don@gmail.com",
    username: "donero",
    password: "ewedon",
    name: {
        firstname: "don",
        lastname: "romer"
    },
    phone: "1-765-789-6734",
    __v: 0
};

const Login = ({ navigation }) => {
    const { data, error, loading, post } = UsePost();
    const distpatch = useDispatch();
    function handleLogin(values) {
        post(URL1, values);
    }
    if (error) {
        <Error />
    }
    if (data != null) {
        distpatch({type:'SET_USER',payload:{user}});
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('./../../../assets/login1.png')} />
            </View>
            <Formik onSubmit={handleLogin} initialValues={{ username: '', password: '' }}>{
                ({ handleSubmit, values, handleChange }) => (
                    <View style={styles.inputContainer}>
                        <Input placeHolder={'Kullanıcı adı'} onType={handleChange('username')} value={values.username} iconName={'user'} />
                        <Input placeHolder={'Sifre'} onType={handleChange('password')} value={values.password} iconName={'eye'} isSecure={true} />
                        <Button title={'Giris Yap'} onPress={handleSubmit} loading={loading} />
                    </View>
                )}
            </Formik>
        </View>
    )
}
export default Login;

