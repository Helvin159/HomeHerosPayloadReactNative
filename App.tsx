import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Reviews from './screens/Reviews';

import Config from 'react-native-config';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OurHeroesStack from './screens/OurHerosStack';
import DashboardStack from './screens/DashboardStack/DashboardStack';

const Tab = createBottomTabNavigator();

export default function App() {
  // console.log(Config.REACT_APP_AWS_S3_REGION);
  return (
    <>
      <StatusBar style={'auto'} />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'rgb(230,230,250)',
            tabBarInactiveTintColor: 'rgb(150,150,160)',
            tabBarLabelStyle: {
              fontSize: 13,
              fontWeight: 600,
              paddingTop: 16
            },
            tabBarShowLabel: true,
            tabBarIconStyle:{
              opacity: 0,
              height: 0,
            },
            tabBarStyle:{
              backgroundColor: 'rgb(23,23,23)',
              margin: 0,
              justifyContent: 'space-between',
              paddingRight: 16,
              paddingLeft: 16
            },

          }}
        >
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='Our Heroes' component={OurHeroesStack} />
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
