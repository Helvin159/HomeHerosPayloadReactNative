import {
  NavigationProp,
  NavigatorScreenParams,
  useNavigation
} from '@react-navigation/native';

import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type OurHeroesStackParamList = {
  OurHeroes: undefined;
  HeroDetails: { id: string | any };
};

type RootTabParamList = {
  Home: undefined;
  OurHeroesStack: NavigatorScreenParams<OurHeroesStackParamList>;
  Reviews: undefined;
  Dashboard: undefined;
};

const ServiceProviderCard = ({ user }: { user: any }) => {
  const date = new Date(user.createdAt);
  const memberSince = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  const navigation = useNavigation<NavigationProp<RootTabParamList>>();

  const handlePress = () => {
    // navigation.navigate('OurHeroesStack', {
    //   screen: 'HeroDetails',
    //   params: { id: user.id }
    // });

    console.log('handle navigation');
  };
  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Text style={styles.heading}>{user.fullName}</Text>
      <Text style={styles.text}>{user.phoneNumber}</Text>
      <Text style={styles.text}>Member since {memberSince}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignContent: 'center'
  },
  heading: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 32
  },
  text: {
    fontSize: 16,
    lineHeight: 20
  }
});

export default ServiceProviderCard;
