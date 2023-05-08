import {View, Text, Image} from 'react-native';
import {styles} from './style';
import React from 'react';
import { BlurView, VibrancyView } from '@react-native-community/blur';

import {Divider} from 'react-native-paper';

const userImage =
  'https://wwd.com/wp-content/uploads/2022/09/Alex-Hormozi..jpg';

const Card = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: userImage}} style={{height: 80, width: 80}} />
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
      <View>
        <Text>Card</Text>
      </View>
    </View>
  );
};

export default Card;
