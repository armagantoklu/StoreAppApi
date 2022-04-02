import React from 'react';
import { View, FlatList } from 'react-native';
import Product from '../../components/Products'
import styles from './Profile.styles'
const URL = 'https://fakestoreapi.com/products';
import useGetir from '../../hooks/useGetir';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Button from './../../components/Button';
const Profile = ({ navigation }) => {
    const { error, productList, loading } = useGetir(URL);
    const press = (id) => {
        navigation.navigate('details', { id });
    }
    const render = ({ item }) => <Product data={item} onPress={() => press(item.id)} />;

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />;
    }
    return (
        <View style={styles.container}>
            <FlatList data={productList} renderItem={render} />
        </View>
    )
}
export default Profile;