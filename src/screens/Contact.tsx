import {View, Text, StyleSheet, Dimensions, Pressable} from 'react-native';
import React from 'react';
import {Input} from '@rneui/themed';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const Contact = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.descriptionText}>
          You want a book thats not listed? Help us with details below and we'll
          make it available in 24hrs
        </Text>

        <Input
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputStyle}
          containerStyle={styles.containerStyles}
          placeholder="Title"
        />
        <Input
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputStyle}
          containerStyle={{height: 10, marginTop: 50}}
          placeholder="Author"
        />
        <Pressable style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Request</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: SCREEN_HEIGHT,
   
  },
  innerContainer: {
    top: 30,
    height: SCREEN_HEIGHT,
    justifyContent: 'center'
  },
  inputContainer: {
    borderWidth: 1,
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    paddingRight: 10,
  },

  inputStyle: {
    color: 'white',
    fontSize: 15,
    borderColor: 'white',
  },
  containerStyles: {
    height: 10,
  },
  descriptionText: {
    color: 'white',
    fontSize: 12,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonContainer: {
    backgroundColor: 'orange',
    width: "50%",
    height: 40,
    marginTop: 50,
    alignSelf: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 17,
    alignSelf: 'center',
    paddingTop: 8
  }
});
