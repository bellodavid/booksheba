import {View, Text, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './style';
import UserPageCard from '../../components/userCard/UserPageCard';
import UserProfile from '../../components/userprofile/UserProfile';

const UserScreen = () => {
  const backgroundImage = 'https://wallpaperaccess.com/full/8055908.jpg';
  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      <UserPageCard />
      <UserProfile />
    </ScrollView>
  );
};

export default UserScreen;
