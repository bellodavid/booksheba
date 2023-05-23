import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import UserPageCard from '../../components/userCard/UserPageCard';
import UserProfile from '../../components/userprofile/UserProfile';
import {AppContext} from '../../../AppContext';
const UserScreen = () => {
  const SCREEN_HEIGHT = Dimensions.get('window').height;
  const {isLiked} = React.useContext(AppContext);
  const backgroundImage = 'https://wallpaperaccess.com/full/8055908.jpg';
  return (
    <ScrollView>
      <View>
        <View
          style={[
            styles.container,
            {height: isLiked ? '100%' : SCREEN_HEIGHT},
          ]}>
          <UserPageCard />
          <UserProfile />
          <View style={{bottom: 20}}></View>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserScreen;
