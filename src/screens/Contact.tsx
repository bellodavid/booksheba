import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import {Input} from '@rneui/themed';
import emailjs from 'emailjs-com';
import {Auth} from 'aws-amplify';

const SERVICE_ID = 'service_vpxvk02';
const TEMPLATE_ID = 'template_2tm91jn';
const PUBLIC_ID = 'U8tT4Fm_dmzpGWKPG';
interface TextProps {
  message: string;
  setMessage: () => void;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  containerStyle: StyleProp<ViewStyle>;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}
const SCREEN_HEIGHT = Dimensions.get('window').height;
const Contact = () => {
  const [userName, setUserName] = React.useState('');
  const [message, setMessage] = React.useState({
    title: '',
    author: '',
  });
  useEffect(() => {
    async function fetchUser() {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        setUserName(currentUser.payload);
        console.log(JSON.stringify(userName, null, 2));
      } catch (error) {
        console.log('Error fetching user:', error);
      }
    }

    fetchUser();
  }, []);

  const templateParams = {
    to_email: 'davidbello998@gmail.com',
    from_name: 'Your Name',
    message: [message.title, message.author],
  };

  const handleSendMail = () => {
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_ID).then(
      response => {
        console.log('Email sent successfully!', response.status, response.text);
      },
      error => {
        console.error('Error sending email:', error);
      },
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.descriptionText}>
          You want a book thats not listed? Help us with details below and we'll
          make it available in 24hrs 😎
        </Text>

        <Input
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputStyle}
          containerStyle={styles.containerStyles}
          placeholder="Title"
          value={message.title}
          onChangeText={text => setMessage({...message, title: text})}
        />
        <Input
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputStyle}
          containerStyle={{height: 10, marginTop: 50}}
          placeholder="Author"
          value={message.author}
          onChangeText={text => setMessage({...message, author: text})}
        />
        <Pressable onPress={handleSendMail} style={styles.buttonContainer}>
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
    justifyContent: 'center',
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
    width: '80%',
    height: 40,
    marginTop: 50,
    alignSelf: 'center',
    shaddowOffset: {width: 0, height: 2},
    shadowColor: '#000',
    shadowRadius: 2,
    elevation: 1,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 17,
    alignSelf: 'center',
    paddingTop: 8,
  },
});
