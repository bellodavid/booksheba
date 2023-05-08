import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import WelcomeScreen from './src/screens/welcome/WelcomeScreen'
import Home from './src/screens/home/HomeScreen'

const App = () => {
  return (
    <View>
      <StatusBar />
      <Home/>
      <Text>App</Text>
    </View>
  )
}

export default App