import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PAGE_WIDTH = Dimensions.get('window').width;
const PAGE_HEIGHT = Dimensions.get('window').height;
const TabNavigation = () => {
  const [isActive, setIsActive] = useState(false);

  const navigation = useNavigation();
  const handlePressIn = screen => {};
  const handleHome = () => {
    if (navigation.isFocused()) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    navigation.navigate('AppHome');
  };
  const handleSearch = () => {
    navigation.navigate('Search');
  };
  const handleContact = () => {
    navigation.navigate('Contact');
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <MaterialCommunityIcons
          name="home"
          size={20}
          color="white"
          onPress={handleHome}
        />
        <Icon
          name="search1"
          type="antdesign"
          size={20}
          color="white"
          onPress={handleSearch}
        />
        <MaterialCommunityIcons name="email-outline" 
        onPress={handleContact} color="white" size={20} />
      </View>
    </View>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    backgroundColor: 'black',
    width: PAGE_WIDTH,
    height: 40,
  },
});
