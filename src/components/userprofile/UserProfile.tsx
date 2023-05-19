import {View, Text, FlatList, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import BookCard from '../books/BookCard';
import {DataStore} from 'aws-amplify';
import {Post} from '../../models';

const SCREEN_WIDTH = Dimensions.get('window').width;
const numColumns = 3;
const UserProfile = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    DataStore.query(Post).then(setBooks);
  }, []);

  return (
    <View style={{flex: 1, width: SCREEN_WIDTH,}}>
      <FlatList
        data={books}
        renderItem={({item, index}) => {
          return <BookCard book={item} key={index} />;
        }}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={numColumns}
      />
    </View>
  );
};

export default UserProfile;
