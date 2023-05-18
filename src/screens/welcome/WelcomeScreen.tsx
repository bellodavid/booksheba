import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  FlatList,
} from 'react-native';
import {styles} from './style';
import React from 'react';
import LoginButton from '../../components/buttons/LoginButton';
import {buttons} from '../../data/Buttons';
import {FlashList} from '@shopify/flash-list';

const height = Dimensions.get('window').height;
const backgroundImage = 'https://i.ibb.co/t4LHGRs/booksheba.jpg';
const WelcomeScreen = () => {
  return (
    <View style={{height: height}}>
      <ImageBackground
        source={{uri: backgroundImage}}
        style={{height: height, width: '100%'}}>
        <View style={styles.buttonContainer}>
          <FlatList
            data={buttons}
            renderItem={({item}) => {
              return <LoginButton title={item.title} icon={item.icon} />;
            }}
            estimatedItemSize={200}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
