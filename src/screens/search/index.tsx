import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchBox from '../../components/searchBox';
import {DataStore} from 'aws-amplify';
import {Post, User} from '../../models';
import BookCard from '../../components/books/BookCard';

const PAGE_WIDTH = Dimensions.get('window').width;
const PAGE_HEIGHT = Dimensions.get('window').height;

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    const filteredPost = posts.filter(
      post =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        users.some(
          user =>
            user.id == post.userID &&
            user.name.toLowerCase().includes(query.toLowerCase()),
        ),
    );
    if (query.trim() === '') {
      setSearchQuery('');
      setPosts([]);
      setUsers([]);
    } else {
      setPosts(filteredPost);
    }
  };
  useEffect(() => {
    DataStore.query(Post).then(setPosts);
    DataStore.query(User).then(setUsers);
  }, [searchQuery]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList
          data={posts}
          renderItem={({item}) => {
            return <BookCard book={item} />;
          }}
          keyExtractor={item => item.id}
          horizontal={false}
          numColumns={3}
          ListHeaderComponent={
            <SearchBox searchQuery={searchQuery} handleSearch={handleSearch} />
          }
          ListHeaderComponentStyle={{marginBottom: 70}}
        />
      </View>
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: PAGE_HEIGHT,
    width: PAGE_WIDTH,
  },
});
