import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Icon, Input} from '@rneui/themed';

interface SearchBoxProp {
  searchQuery: string;
  handleSearch: () => void;
}

const SearchBox = ({searchQuery, handleSearch}: SearchBoxProp) => {
  return (
    <View style={styles.container}>
      <Input
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputStyle}
        containerStyle={styles.containerStyle}
        rightIcon={
          <Icon name="search1" type="antdesign" size={20} color="gray" />
        }
        placeholder="Search"
        value={searchQuery}
        onChangeText={handleSearch}
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    top: 20,
  },

  containerStyle: {
    height: 10,
    borderBottomWidth: 0,
  },
  inputContainer: {
    borderWidth: 1,
    height: 40,
    paddingRight: 10,
  },
  inputStyle: {
    color: 'white',
    fontSize: 15,
    borderBottomWidth: 0,
    borderColor: 'white',
  },
});
