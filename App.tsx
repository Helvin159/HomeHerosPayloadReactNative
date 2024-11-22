import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Reviews from './screens/Reviews';

import Config from 'react-native-config';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OurHerosStack from './screens/OurHerosStack';
import DashboardStack from './screens/DashboardStack/DashboardStack';

const Tab = createBottomTabNavigator();

export default function App() {
  // console.log(Config.REACT_APP_AWS_S3_REGION);
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style={'auto'} />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='OurHerosStack' component={OurHerosStack} />
          <Tab.Screen name='Reviews' component={Reviews} />
          <Tab.Screen name='Dashboard' component={DashboardStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    marginTop: 48
  }
});
