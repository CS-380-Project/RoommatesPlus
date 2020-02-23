import  React from 'react';
import { Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Screens Imports
import Login from '../frontend/screens/Login';
import CreateAccount from '../frontend/screens/CreateAccount';
import AccountInfo from '../frontend/screens/AccountInfo';
import Profile from '../frontend/screens/Profile';
import CreateHouseHold from '../frontend/screens/CreateHouseHold';
import JoinHouseHold from '../frontend/screens/JoinHouseHold';
import Settings from '../frontend/screens/Settings';
import AuthLoadingScreen from './AuthLoadingScreen';

// Load Screen
const AuthLoading = AuthLoadingScreen

// Stack Navigator for Login & Create Account Screens
const SignedOut = createStackNavigator({
    LoginScreen: Login,
    CrtAccountScreen: CreateAccount,
    UserInfo: AccountInfo
});

// Bottom Tab Navigator for Profile, Household, and Settings Screens
const SignedIn = createMaterialBottomTabNavigator(
    {
      Profile: { screen: Profile},
      Household: { screen: CreateHouseHold },
      Settings: { screen: Settings },
    },
    {
      initialRouteName: 'Profile',
      activeColor: '#f0edf6',
      inactiveColor: '#3e2465',
      barStyle: { backgroundColor: '#694fad' },
    }
  );

// Root Switch Navigator used for clean authentication flow
const RootNavigator = createSwitchNavigator(
    {
      Loading: AuthLoading,
      LoggedIn: SignedIn,
      LoggedOut: SignedOut,
    },
    {
      initialRouteName: 'Loading',
    }
  )

export default createAppContainer(RootNavigator);