import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  bannerImage: {
    zIndex: -1,
    height: 200,
    top: 0,
    width: WIDTH,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderRadius: 20,
  },
  arrowLeft: {
    color: 'white',
    top: 7,
    left: 0,
    marginLeft: 0,
  },
  container: {
    flex: 1,
    color: 'white',
    paddingLeft: 0,
    width: WIDTH,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 10,
  },
  name: {
    color: 'white',
    fontSize: 13,
  },
  userImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'white',
    marginRight: 20,
  },
  button: {
    borderWidth: 2,
    borderColor: "#FFBC00",
    borderRadius: 50,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    top: 10
  },
  buttonText: {
    color: "#FFBC00",
    fontWeight: "600",
  }
});
