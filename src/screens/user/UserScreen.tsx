import {View, Text, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './style';
import UserPageCard from '../../components/userCard/UserPageCard';
import UserProfile from '../../components/userprofile/UserProfile';

const UserScreen = () => {
  const backgroundImage = 'https://wallpaperaccess.com/full/8055908.jpg';
  return (
    <ScrollView >
    <View>
      <View style={[styles.container]}>
        <UserPageCard />
        <UserProfile />
        <View style={{bottom: 20}}>

        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default UserScreen;
