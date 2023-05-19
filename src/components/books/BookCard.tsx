import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
 
} from 'react-native';
import {styles} from './BookCardStyle';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';

interface BookCardProp {
  book: string;
}

const BookCard = ({book}) => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate('Reading');
  };
  
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity >
        <Image
          source={{uri: `${book.image}`}}
          style={{height: 100, width: 100, top: 10}}
        />
        <View>
          <Text style={{color: 'white', top: 10}}>{book.title}</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BookCard;
