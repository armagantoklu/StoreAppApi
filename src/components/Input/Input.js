import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './Input.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
const Input = ({ placeHolder, onType,value,iconName ,isSecure}) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={placeHolder} onChangeText={onType} value={value}  secureTextEntry={isSecure}/>
            <Icon name={iconName} size={30} />
        </View>
    )
}
export default Input;