import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from '../screens/LandingScreen';

const StackNavigator = createStackNavigator();
// const isSignedIn = false;

const StackedNavigation = () => (
  <StackNavigator.Navigator
    initialRouteName="LandingScreen"
    screenOptions={{
      header: () => null,
    }}>
    <StackNavigator.Screen component={LandingScreen} name="LandingScreen" />
  </StackNavigator.Navigator>
);

export default StackedNavigation;
