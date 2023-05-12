import {
  View,
  Text,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {styles} from './BookCardStyle';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import WebView from 'react-native-webview';

const BookCard = () => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate('Reading');
  };
  const imageUri =
    'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627034891i/58612786.jpg';
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClick}>
        <Image
          source={{uri: imageUri}}
          style={{height: 100, width: 100, top: 10}}
        />
        <View>
          <Text style={{color: 'white', top: 10}}>$100M OFFERS</Text>
          <Text style={{color: 'white', top: 10}}>2019 </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BookCard;
