import React from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StackedNavigation from './appStackNavigator';

const AllAppNavigation = createStackNavigator();

const RootNavigator = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AllAppNavigation.Navigator
        initialRouteName="stack"
        screenOptions={{
          header: () => null,
        }}>
        <AllAppNavigation.Screen name="stack" children={StackedNavigation} />
      </AllAppNavigation.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
