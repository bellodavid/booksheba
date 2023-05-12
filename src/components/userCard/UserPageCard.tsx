import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './userPageCardStyle';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import {Image} from '@rneui/base';
import Fontisto from 'react-native-vector-icons/Fontisto';

const UserPageCard = () => {
  const navigation = useNavigation();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLiked, setisLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const handleBack = () => {
    navigation.goBack();
  };

  const handleSubscription = () => {
    setIsSubscribed(!isSubscribed);
  };

  const handleLiked = () => {
    setisLiked(!isLiked);
  };

  const handleBookmarked = () => {
    setIsBookmarked(!isBookmarked);
  }
  const bannerImage =
    'https://drscdn.500px.org/photo/124049133/m%3D900/d254129f1d7aaf6a7e415d628083820e';

  const userImage =
    'https://wwd.com/wp-content/uploads/2022/09/Alex-Hormozi..jpg';
  return (
    <View>
      <ImageBackground style={styles.bannerImage} source={{uri: bannerImage}}>
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
          <Text style={[styles.name, {fontWeight: 'bold'}]}>Alex Hormozi</Text>
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
        <Image source={{uri: userImage}} style={styles.userImage} />
        <View style={{flexDirection: 'row'}}>
          <Icon
            type="antdesign"
            name={isLiked ? 'heart' : 'hearto'}
            color="white"
            style={{marginRight: 20}}
            size={20}
            onPress={handleLiked}
          />
          <Fontisto
          
            name={isBookmarked? "bookmark" : "bookmark-alt"}
            color="white"
            style={{marginRight: 20}}
            size={20}
            onPress={handleBookmarked}

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
          Alex Homorzi
        </Text>
        <Text style={{color: 'gray', fontSize: 15, marginBottom: 10}}>
          @alexhomorzi
        </Text>
        <Text style={{color: 'white', fontSize: 12, lineHeight: 20}}>
          Alex Hormozi is a first-generation Iranian-American entrepreneur,
          investor, and philanthropist. In 2013, he started his first brick &
          mortar business. Within three years, he successfully scaled his
          business to six locations. He then sold his locations to transition to
          the turnaround business.
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
            FOR FREE
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UserPageCard;
