import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './Products.styles'

const Products = ({ data,onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: data.image }} />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.price}>{data.price} TL</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Products;