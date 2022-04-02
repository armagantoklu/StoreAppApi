import { StyleSheet, Dimensions } from 'react-native';
export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'aqua',
        margin: 8,
        borderRadius: 10,
        padding: 5,
        borderWidth: 0.2,
    },
    image: {
        width: Dimensions.get('window').width / 4,
        minHeight: 100,
        resizeMode: 'contain',
        backgroundColor: 'white',

    },
    infoContainer: {
        padding: 5,
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: '400',
        color: 'black',
        fontSize: 15
    },
    price: {
        color: 'red',
        textAlign: 'right',
    }
});