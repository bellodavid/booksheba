import {View, Text, FlatList, Dimensions, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import BookCard from '../books/BookCard';
import {DataStore} from 'aws-amplify';
import {Post} from '../../models';
import {AppContext} from '../../../AppContext';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const numColumns = 3;
const UserProfile = () => {
  const {userId} = React.useContext(AppContext);
 
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
     await DataStore.query(Post, (post) => post.userID.eq(userId)).then(setBooks)
    };
    fetchPosts();
  }, [userId]);
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
