import Reat from 'react';
import{View,Text,StyleSheet, TouchableOpacity} from 'react-native';

const Button = ({ labelButton, onpress}) => {
    return (
        <TouchableOpacity style={styles.button}
            onPress={onpress}>

            <Text>{labelButton}</Text>
        </TouchableOpacity>
        
    )


}
export default Button

const styles = StyleSheet.create({

    button: {
        backgroundColor:'#ddd',
        width: 200,
        height: 45,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 3,
        marginVertical: 7
        
    }  






})