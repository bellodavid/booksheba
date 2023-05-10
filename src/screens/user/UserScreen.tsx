import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './style';
import UserPageCard from '../../components/userCard/UserPageCard';

const UserScreen = () => {
    const backgroundImage = 'https://wallpaperaccess.com/full/8055908.jpg'
  return (
  <View style={styles.container}>
   
    <UserPageCard/>
    </View>
  );
};

export default UserScreen;
