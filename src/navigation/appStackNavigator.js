import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from '../screens/LandingScreen';
import RecoverScreen from '../screens/RecoverScreen';

const StackNavigator = createStackNavigator();
// const isSignedIn = false;

const StackedNavigation = () => (
  <StackNavigator.Navigator
    // initialRouteName="LandingScreen"
    screenOptions={{
      header: () => null,
    }}>
    <StackNavigator.Screen component={LandingScreen} name="LandingScreen" />
    <StackNavigator.Screen component={RecoverScreen} name="RecoverScreen" />
  </StackNavigator.Navigator>
);

export default StackedNavigation;
