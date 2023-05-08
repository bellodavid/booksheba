import {StyleSheet, Dimensions} from 'react-native';


const height = Dimensions.get('window').height
export const styles = StyleSheet.create({
  container: {
 
    height: height,
    width: '100%',
  },
 buttonContainer: {
  marginTop: height/2,
  height: height,
 }
});
