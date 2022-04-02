import React from 'react';
import{TouchableOpacity,Text,ActivityIndicator}from 'react-native';
import styles from './Button.styles';

const Button = ({title , onPress,loading}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress} disabled={loading}>
            {loading ? <ActivityIndicator size={'small'} /> : <Text style={styles.title}>{title}</Text>}
            
        </TouchableOpacity>
    )
}
export default Button;