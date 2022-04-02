import { StyleSheet, Dimensions } from 'react-native';
export default StyleSheet.create({
    container: {
        backgroundColor: '#FAD9E6',
        flex: 1
    },
    image: {
        width: Dimensions.get('window').width / 0.9,
        height: Dimensions.get('window').height / 2,
        resizeMode: 'contain',

    },
    imageContainer: {
        alignItems: 'center'
    },
    inputContainer: {

    }
});
