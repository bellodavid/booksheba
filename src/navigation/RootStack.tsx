import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigator from './TabNavigator';
import UserScreen from '../screens/user/UserScreen';
import Reading from '../screens/Reading';

export type RootStackParamList = {
  AppHome: String;
  UserPage: String;
  Reading: String;
};

const RootStack = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <RootStack.Navigator>
      <RootStack.Group screenOptions={{headerShown: false}}>
        <RootStack.Screen name="AppHome" component={BottomNavigator} />
        <RootStack.Screen name="UserPage" component={UserScreen} />
        <RootStack.Screen name="Reading" component={Reading} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStack;
