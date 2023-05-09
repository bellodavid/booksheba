import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigator from './BottomNavigator';
import UserScreen from '../screens/user/UserScreen';

export type RootStackParamList = {
  AppHome: String;
    UserPage: String;
};

const RootStack = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <RootStack.Navigator>
      <RootStack.Group screenOptions={{headerShown: false}}>
        <RootStack.Screen name="AppHome" component={BottomNavigator} />
        <RootStack.Screen name="UserPage" component = {UserScreen} />  
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStack;
