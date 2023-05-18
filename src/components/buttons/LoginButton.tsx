import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';

interface LoginButtonProps {
  title: string;
  icon: string;
  name: string;
}

const LoginButton = ({title, icon, name}: LoginButtonProps) => {
  const navigation = useNavigation();
  const [buttonPressed, setButtonPressed] = useState(false);

  const handlePressIn = () => {
    setButtonPressed(true);
  };

  const handlePressOut = () => {
    setButtonPressed(false);
  };

  const handleButtonPress = () => {
    // Handle button press here
    if (title === 'LOGIN') {
      // Perform login action
    } else {
      // Perform other action
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handleButtonPress}
        style={[
          styles.buttonContainer,
          title === 'LOGIN' && styles.loginColor,
          buttonPressed && styles.buttonPressed,
        ]}>
        <Icon name={icon} size={20} style={{marginHorizontal: 8}} />
        <Text style={[styles.text, title === 'LOGIN' && styles.loginText]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginButton;
