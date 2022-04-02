import { StyleSheet, Dimensions } from 'react-native';
export default StyleSheet.create({
    container: { margin: 5, borderRadius: 20 ,flex:1 },
    image: {
        flex:0.4,
        margin: 5,
        resizeMode: 'contain',
        backgroundColor: 'white',
        padding: 10,
        width: '98%',
        height: Dimensions.get('window').height / 3,
    },
    icon: { flex:0.6,padding: 10 , justifyContent:'space-around'},
    title: { fontSize: 25, color : 'black'},
    desc: { fontSize: 20,fontStyle:'italic' },
    price: { color: 'red' , fontSize:30 , textAlign:'right'}
})