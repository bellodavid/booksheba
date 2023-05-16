import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
import {WebView} from 'react-native-webview';
import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
