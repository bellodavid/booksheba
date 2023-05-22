import {View, Text, FlatList, Dimensions, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import BookCard from '../books/BookCard';
import {DataStore} from 'aws-amplify';
import {Post} from '../../models';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const numColumns = 3;
const UserProfile = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    DataStore.query(Post).then(setBooks);
    console.log(JSON.stringify(books, null, 2));
  }, []);
  const renderFooter = () => <View style={{margin: 20}} />;

  return (
    <ScrollView>
      <View style={{height: '100%'}}>
        <FlatList
          data={books}
          renderItem={({item, index}) => {
            return <BookCard book={item} key={index} />;
          }}
          keyExtractor={item => item.id}
          horizontal={false}
          numColumns={numColumns}
          style={{flex: 1}}
        />
      </View>
    </ScrollView>
  );
};

export default UserProfile;
