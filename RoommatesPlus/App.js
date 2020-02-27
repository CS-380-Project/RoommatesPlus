import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './frontend/screens/Login';
import CreateAccount from './frontend/screens/CreateAccount';
import Dashboard from './frontend/screens/Dashboard';
import CreateHouseHold from './frontend/screens/CreateHouseHold';
import JoinHouseHold from './frontend/screens/JoinHouseHold';
import Settings from './frontend/screens/Settings';
import AccountInfo from './frontend/screens/AccountInfo';


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
  UserInfo: AccountInfo
});

const ScreenContainer= createAppContainer(AppNavigator);

