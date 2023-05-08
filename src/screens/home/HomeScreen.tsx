import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import Card from '../../components/userCard/Card'

const Home = () => {
  return (
    <View style={styles.container}>
      <Card/>
      <Text>Home</Text>
    </View>
  )
}

export default Home