import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('window').height / 2;
export const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    width: '100%',
    height: 60,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '80%',
    fontWeight: 300,
    fontSize: 20,
    marginLeft: 45,
    borderRadius: 25,
    margin: 10,
    flexDirection: 'row',
    paddingRight: 15,
    justifyContent: 'center',
  },
  text: {
    fontSize: 13,
    fontWeight: "200",
    color: 'black',
    letterSpacing: 1,
  },
  buttonPressed: {
    backgroundColor: 'orange',
  },
  loginColor: {
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 2,
   
  },
  loginText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 1,

  }
});
