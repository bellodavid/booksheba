import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {buttonProp} from '../../interfaces';
import Icon from 'react-native-vector-icons/AntDesign';
import {buttons} from '../../data/Buttons';
import {styles} from './style';
const LoginButton = ({title, icon}: buttonProp) => {
  const [buttonPressed, setButtonPressed] = useState(false);
  const handlePressIn = () => {
    setButtonPressed(true);
  };

  const handlePressOut = () => {
    setButtonPressed(false);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[styles.buttonContainer, title==="LOGIN" && styles.loginColor, buttonPressed && styles.buttonPressed]}>
        <Icon name={icon} size={20} style={{marginHorizontal: 8}} />

        <Text style={[styles.text, title==="LOGIN" && styles.loginText]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginButton;
