import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {styles} from './style';
import React from 'react';
import {CardDivider} from '@rneui/base/dist/Card/Card.Divider';
import {Icon} from '@rneui/base';
import {useNavigation, useRoute} from '@react-navigation/native';
import {UserCArdProp} from '../../interfaces';
import {AppContext} from '../../../AppContext';


interface userPageProp {
  navigate: (routeName: string) => void;
}

const Card = ({user}: any) => {
  const { setUserId } = React.useContext(AppContext);
  const backgroundUri =
    'https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2014/01/new-york-city-usa.jpg?ssl=1';

  const navigation = useNavigation<userPageProp>();
  const handleUserPage = ({id, name}: UserCArdProp) => {
    navigation.navigate('UserPage', {
      id: user.id,
      handle: user.handle,
      name: user.name,
      bio: user.bio,
      avatar: user.avatar,
      coverImage: user.coverImage,
    });
    setUserId(user.id);
  };
  const userImage =
    'https://wwd.com/wp-content/uploads/2022/09/Alex-Hormozi..jpg';

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleUserPage}>
        <View>
          <Image
            source={{uri: `${user.avatar}`}}
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
              marginBottom: 10,
            }}
          />
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              marginLeft: 20,
              marginRight: 20,
            }}>
            <Text style={styles.title}>{user.name}</Text>
            <Icon
              type="antdesign"
              name="hearto"
              color="white"
              style={{marginTop: 2}}
              size={13}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
