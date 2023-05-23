import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SearchScreen from '../screens/search';
import FavoriteScreen from '../screens/favorite/FavoriteScreen';
import HomeScreen from '../screens/home/HomeScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import UserScreen from '../screens/user/UserScreen';

export type RootStackParamList = {
  AppHome: String;
  UserPage: String;
};

export type stackParamList = {
  Home: undefined;
  Search: undefined;
  Favorite: String;
};

const BottomNavigator = () => { 
  const Tab = createBottomTabNavigator<stackParamList>();
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'black',
          height: 55,
          borderTopWidth: 0,
          paddingBottom: 8,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          display: 'none',
        },
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return (
              <Feather
                name="users"
                size={20}
                color={focused ? 'white' : 'gray'}
              />
            );
          } else if (route.name === 'Search') {
            return (
              <Icon
                type="antdesign"
                name="search1"
                size={20}
                color={focused ? 'white' : 'gray'}
              />
            );
          } else if (route.name === 'Favorite') {
            return (
              <MaterialIcons
                name="favorite-outline"
                size={20}
                color={focused ? 'white' : 'gray'}
              />
            );
          }
        },
      })}>
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Favorite"
        component={FavoriteScreen}
      />
      
    </Tab.Navigator>
  );
};

export default BottomNavigator;
