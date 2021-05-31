// Tab View inside Navigation Drawer
// https://aboutreact.com/tab-view-inside-navigation-drawer-sidebar-with-react-navigation/

import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import Home from './app/home';
import SongDetail from './app/songDetail'
const Stack = createStackNavigator();

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Song">
        <Stack.Screen
          name="Song"
          component={Home}
          options={({ route }) => ({
            headerStyle: {
              backgroundColor: '#1565c0', //Set Header color
            },
            headerTitleStyle: { alignSelf: 'center' },
            headerTintColor: '#fff', //Set Header text color
          })}
        />
        <Stack.Screen
          name="Detail"
          component={SongDetail}
          options={({ route }) => ({
            headerStyle: {
              backgroundColor: '#1565c0', //Set Header color,
            },
            headerTitleStyle: { alignSelf: 'center', paddingRight: 20 },
            headerTintColor: '#fff', //Set Header text color
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
