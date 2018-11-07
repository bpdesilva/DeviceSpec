import React, { Component } from "react";
import HomeScreen from './Screen/Home';
import AboutScreen from './Screen/Home';

//Material Tab Bar
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
//Platform Specific Icons
import Icon from 'react-native-vector-icons/Ionicons';

//Create bottom Tabs
export default createMaterialBottomTabNavigator({
    Home: {
      screen: HomeScreen, //Screen name
      navigationOptions: {
        tabBarLabel: 'Home', // Tab Label
        tabBarIcon: () => (
          //Platform specific code for icons
          <Icon name="ios-home" color={'white'} size={24} />
        )
      }
    },
    About: {
      screen: AboutScreen,//Screen name
      navigationOptions: {
        tabBarLabel: 'About', // Tab Label
        tabBarIcon: () => (
          //Platform specific code for icons
          <Icon name="ios-settings" color={'white'} size={24} />
        )
      }
    }
  }, {
      initialRouteName: 'Home',
      activeTintColor: '#717D7E',
      swipeEnabled: true,
      shifting: true
});