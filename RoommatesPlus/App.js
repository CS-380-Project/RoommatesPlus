import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import * as SQLite from 'expo-sqlite';
import Login from './scripts/Login';
import CreateAccount from './scripts/CreateAccount';
import Dashboard from './scripts/Dashboard';
import CreateHouseHold from './scripts/CreateHouseHold';

export default class App extends Component {

  // front end render input fields and button
  render(){
    return <ScreenContainer/>;

  }
}   

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    height: 40,
    width: 120,
    borderColor: 'gray',
    borderWidth: 1
  }
});

const AppNavigator = createStackNavigator({
  LoginScreen: Login,
  Roommates: Dashboard,
  CrtAccountScreen: CreateAccount,
  House: CreateHouseHold
});

const ScreenContainer= createAppContainer(AppNavigator);

