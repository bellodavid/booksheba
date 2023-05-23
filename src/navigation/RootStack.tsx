import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigator from './TabNavigator';
import UserScreen from '../screens/user/UserScreen';
import Reading from '../screens/Reading';
import HomeScreen from '../screens/home/HomeScreen';
import WelcomeScreen from '../screens/welcome/WelcomeScreen';
import Search from '../screens/search';

export type RootStackParamList = {
  AppHome: String;
  UserPage: String;
  Reading: String;
  HomeScreen: String;
  WelcomeScreen: String;
  Search: String;
};

const RootStack = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <RootStack.Navigator>
      <RootStack.Group screenOptions={{headerShown: false}}>
        <RootStack.Screen name="AppHome" component={HomeScreen} />
        <RootStack.Screen name="UserPage" component={UserScreen} />
        <RootStack.Screen name="Reading" component={Reading} />
        <RootStack.Screen name="Search" component={Search} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStack;
