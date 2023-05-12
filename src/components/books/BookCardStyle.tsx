import {StyleSheet, Dimensions} from 'react-native';
const WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        marginLeft: 30, 
        top: 10,
    }
})