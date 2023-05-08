import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: "80%",
    height: 120,
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 15,
  },

  linearGradient: {
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
  },
  blurView: {
    position: 'absolute',
    top: -10,
    left: -10,
    right: -10,
    bottom: -10,
  },
  absolute: {
    height: 100,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
