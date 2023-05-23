import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
    alignItems: 'center',
  },
  winHeight: {
    height: height,
  },
});
