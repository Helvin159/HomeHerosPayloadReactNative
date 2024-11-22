// @todo tsrnf
import { View } from 'react-native';
import React from 'react';
import ServiceSearch from '../components/ServiceSearch/ServiceSearch';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <View>
      <ServiceSearch />
    </View>
  );
};

export default HomeScreen;
