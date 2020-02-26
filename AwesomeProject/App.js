import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './component/Main';
import Home from './component/Home';
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Main:{
    screen:Main
  },

});

export default createAppContainer(AppNavigator);