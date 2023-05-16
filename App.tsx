import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
import {WebView} from 'react-native-webview';
import {Amplify} from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);
import {Authenticator, ThemeProvider} from '@aws-amplify/ui-react-native';
import WelcomeScreen from './src/screens/welcome/WelcomeScreen';
import HomeScreen from './src/screens/home/HomeScreen';

const App = () => {
  return (
    <Authenticator.Provider>
      <NavigationContainer>
       <WelcomeScreen/>
      </NavigationContainer>
    </Authenticator.Provider>
  );
};

export default App;
