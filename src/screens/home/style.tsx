import {StyleSheet, Dimensions} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
});
