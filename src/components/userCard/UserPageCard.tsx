import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './userPageCardStyle';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import {Image} from '@rneui/base';
import {AppContext} from '../../../AppContext';

const UserPageCard = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const {isLiked, setIsLiked} = React.useContext(AppContext);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const handleBack = () => {
    navigation.goBack();
  };

  const handleSubscription = () => {
    setIsSubscribed(!isSubscribed);
  };

  const handleLiked = () => {
    if (isSubscribed) {
      alert('You need to subscribe to like this post');
      setIsLiked(false);
    } else if (!isSubscribed) {
      setIsLiked(true);
    }
  };

  const handleBookmarked = () => {
    setIsBookmarked(!isBookmarked);
  };
  useEffect(() => {
    if (isSubscribed) {
      setIsLiked(false);
    } else if (!isSubscribed) {

      setIsLiked(true);
    }
  }, [isSubscribed]);
  return (
    <View>
      <ImageBackground
        style={styles.bannerImage}
        source={{uri: `${route.params.coverImage}`}}>
        <View style={styles.container}>
          <TouchableOpacity onPress={handleBack}>
            <Icon
              type="antdesign"
              name="arrowleft"
              color="white"
              style={{marginTop: 30}}
              size={20}
            />
          </TouchableOpacity>
        </View>
        <View style={{position: 'absolute', top: 20, marginLeft: 50}}>
          <Text style={[styles.name, {fontWeight: 'bold'}]}>
            @{route.params.handle.toLowerCase()}
          </Text>
          <Text style={[styles.name, {top: 5}]}>1.5K Posts 50K Likes 20K</Text>
        </View>
      </ImageBackground>
      <View
        style={{
          marginTop: -30,
          marginLeft: 20,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}>
        <Image
          source={{uri: `${route.params.avatar}`}}
          style={styles.userImage}
        />
        <View style={{flexDirection: 'row'}}>
          <Icon
            type="antdesign"
            name={isLiked ? 'heart' : 'hearto'}
            color="white"
            style={{marginRight: 20}}
            size={20}
            onPress={handleLiked}
          />
      
        </View>
      </View>
      <View style={{marginLeft: 15}}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: '600',
            marginVertical: 5,
          }}>
          {route.params.name}
        </Text>
        <Text style={{color: 'gray', fontSize: 15, marginBottom: 10}}>
          @{route.params.handle}
        </Text>
        <Text style={{color: 'white', fontSize: 12, lineHeight: 20}}>
          {route.params.bio}
        </Text>
        <Text style={{color: 'white', top: 10}}>SUBSCRIPTION</Text>
        <Pressable
          onPress={handleSubscription}
          style={[
            styles.button,
            {backgroundColor: isSubscribed ? '#FFBC00' : 'transparent'},
          ]}>
          <Text
            style={[
              styles.buttonText,
              {color: isSubscribed ? 'black' : '#FFBC00'},
            ]}>
            {isSubscribed ? 'SUBSCRIBE' : 'SUBSCRIBED'}
          </Text>
          <Text
            style={[
              styles.buttonText,
              {color: isSubscribed ? 'black' : '#FFBC00'},
            ]}>
            {isSubscribed ? 'FOR FREE' : '$0'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UserPageCard;
