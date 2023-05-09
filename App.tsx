import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import WelcomeScreen from './src/screens/welcome/WelcomeScreen';
import Home from './src/screens/home/HomeScreen';
import BottomNavigator from './src/navigation/BottomNavigator';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';



const App = () => {
  return (
   
      <NavigationContainer>
      <StatusBar />
     <RootStack/>
   
    </NavigationContainer>
  );
};

export default App;
