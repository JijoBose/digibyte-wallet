import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StackedNavigation from './appStackNavigator';

const AllAppNavigation = createStackNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <AllAppNavigation.Navigator
      initialRouteName="stack"
      screenOptions={{
        header: () => null,
      }}>
      <AllAppNavigation.Screen name="stack" children={StackedNavigation} />
    </AllAppNavigation.Navigator>
  </NavigationContainer>
);
export default RootNavigator;
