import {View, Text, ImageBackground, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import Card from '../../components/userCard/UserCard';
import {FlashList} from '@shopify/flash-list';
import {DataStore} from 'aws-amplify';
import {User} from '../../models';
import { useAuthenticator } from '@aws-amplify/ui-react-native';

const HomeScreen = () => {
  const [users, setUsers] = useState([]);
  const { signOut } = useAuthenticator();
  useEffect(() => {
    DataStore.query(User).then(setUsers);
  }, []);
  return (
    <ImageBackground
      source={{
        uri: 'https://wallpaperaccess.com/full/8055908.jpg',
      }}
      style={styles.container}>
      <Text onPress={() => signOut()}style={{color: "white"}}>SignOut</Text>
      <FlatList
        data={users}
        renderItem={({item, index}) => {
          return <Card user={item} key={index} />;
        }}
      />
      
    </ImageBackground>
  );
};

export default HomeScreen;
