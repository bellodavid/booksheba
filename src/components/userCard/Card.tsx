import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './style';
import React from 'react';
import {BlurView} from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';
import {Divider} from 'react-native-paper';
import {CardDivider} from '@rneui/base/dist/Card/Card.Divider';
import {Icon} from '@rneui/base';

const userImage =
  'https://wwd.com/wp-content/uploads/2022/09/Alex-Hormozi..jpg';

const Card = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View>
          <Image
            source={{uri: userImage}}
            style={{
              height: 100,
              width: 100,
              alignSelf: 'center',
              paddingTop: 0,
              borderRadius: 5,
            }}
          />
          <CardDivider
            style={{
              marginTop: 10,
              width: 130,
              alignSelf: 'center',
              marginBottom: 5,
            }}
          />
          <View>
            <Text style={styles.title}>Alex Homorzi</Text>
            <Icon
              type="antdesign"
              name="heart"
              color="white"
              size={13}
            
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
