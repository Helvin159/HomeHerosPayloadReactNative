import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './Dashboard';
import SalesPipeline from './SalesPipeline';

const Stack = createNativeStackNavigator();

type Props = {};

const DashboardStack = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Dashboard' component={Dashboard} />
      <Stack.Screen name='Sales Pipeline' component={SalesPipeline} />
    </Stack.Navigator>
  );
};

export default DashboardStack;
