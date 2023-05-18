import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH/1.5,
    height: 170,
    backgroundColor: 'rgba(235, 236, 231, 0.1)',
    padding: 20,
    borderRadius: 15,
    flexGrow: 1,
    marginTop: 30,
  },
  title: {
    fontSize: 10,
    color: 'white',
    alignSelf: 'center',
    marginTop: 0,
    flex: 1,
    alignContent: 'center',
  },
});
