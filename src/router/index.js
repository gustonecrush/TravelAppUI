import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnBoardingScreen, HomeScreen, DetailScreen} from '../screens';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="OnBoardingScreen">
      <Stack.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
