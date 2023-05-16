import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './style';
import Card from '../../components/userCard/UserCard';

const HomeScreen = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://wallpaperaccess.com/full/8055908.jpg',
      }}
      style={styles.container}>
      <Card />
      <Card />
      <Card />
      <Text>Home</Text>
    </ImageBackground>
  );
};

export default HomeScreen;
