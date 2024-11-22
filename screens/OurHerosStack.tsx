import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OurHeroesScreen from './OurHeroesScreen';
import HeroScreen from './HeroScreen';

type Props = {};

const Stack = createNativeStackNavigator();

const OurHeroesStack = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='OurHeroes' component={OurHeroesScreen} />
      <Stack.Screen name='HeroDetails' component={HeroScreen} />
    </Stack.Navigator>
  );
};

export default OurHeroesStack;
