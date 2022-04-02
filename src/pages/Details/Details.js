import React from 'react';
import { View, Text, Image } from 'react-native';
import UseGetir from './../../hooks/useGetir';
import styles from './Details.styles';
import Error from './../../components/Error';
import Loading from './../../components/Loading';
const Details = ({ route }) => {
    const { id } = route.params;
    const { error, productList, loading } = UseGetir(`https://fakestoreapi.com/products/${id}`);
    if (error) {
        return <Error />
    }
    if (loading) {
        return <Loading />
    }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: productList.image }} />
            <View style={styles.icon}>
                <Text style={styles.title}>{productList.title}</Text>
                <Text style={styles.desc}>{productList.description}</Text>
                <Text style={styles.price}>{productList.price}TL</Text>
            </View>
        </View>
    )
}
export default Details;