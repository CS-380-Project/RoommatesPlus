import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './scripts/Login';
import CreateAccount from './scripts/CreateAccount';
import Dashboard from './scripts/Dashboard';
import CreateHouseHold from './scripts/CreateHouseHold';
import JoinHouseHold from './scripts/JoinHouseHold';
import Settings from './scripts/Settings';

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
  House: CreateHouseHold,
  JnHsHld: JoinHouseHold,
  CrtHsHld: CreateHouseHold,
  SettingView: Settings,
  LogoutScreen: Login,
});

const ScreenContainer= createAppContainer(AppNavigator);

