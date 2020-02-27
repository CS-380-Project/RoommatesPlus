import  React from 'react';

// Navigation Imports
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// https://oblador.github.io/react-native-vector-icons/ for icons list, change /FontAwesome for different section
import Icon from 'react-native-vector-icons/FontAwesome';

// Screens Imports
import Login from '../frontend/screens/Login';
import CreateAccount from '../frontend/screens/CreateAccount';
import AccountInfo from '../frontend/screens/AccountInfo';
import Profile from '../frontend/screens/Profile';
import CreateHouseHold from '../frontend/screens/CreateHouseHold';
import JoinHouseHold from '../frontend/screens/JoinHouseHold';
import Settings from '../frontend/screens/Settings';
import AuthLoadingScreen from './AuthLoadingScreen';
import HouseHoldDashboard from '../frontend/screens/HouseHoldDashboard';
import HouseHoldMembers from '../frontend/screens/HouseHoldMembers';

// Load Screen
const AuthLoading = AuthLoadingScreen

// Stack Navigator for Login & Create Account Screens
const SignedOut = createStackNavigator({
    LoginScreen: {
      screen: Login,
      navigationOptions: {
        headerShown: false
      } 
    },
    CrtAccountScreen: {
      screen: CreateAccount,
      navigationOptions: {
        headerShown: false
      }
    },   
    UserInfo: {
      screen: AccountInfo,
      navigationOptions: {
        headerShown: false
      }
    },

});

//stack navigator for HouseHoldDashboard
const HousehldDash = createStackNavigator({
  Household: { 
    screen: CreateHouseHold,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (<Icon size={25} name={'home'} style={{ color: tintColor }} />)
    }
  },
  HsHldDashboard:{
    screen: HouseHoldDashboard,
    navigationOptions:{
      headerShown: true
    }
    },
    HsHldMems:{
      screen: HouseHoldMembers,
      navigationOptions:{
        headerShown: true
    }
  }
});
// Bottom Tab Navigator for Profile, Household, and Settings Screens
const SignedIn = createMaterialBottomTabNavigator(
    {
      Profile: { 
        screen: Profile,
        navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => (<Icon size={25} name={'user'} style={{ color: tintColor }} />)
        }
      },
      Household: { 
        screen: CreateHouseHold,
        navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => (<Icon size={25} name={'home'} style={{ color: tintColor }} />)
        }
      },
      Settings: { 
        screen: Settings,
        navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => (<Icon size={25} name={'gear'} style={{ color: tintColor }} />)
        }
      },
    },
    {
      initialRouteName: 'Profile',
      shifting: 'true',
      activeColor: 'white',
      inactiveColor: 'black',
      barStyle: { backgroundColor: '#AB0032',  },
    }
  );

// Root Switch Navigator used for clean authentication flow
const RootNavigator = createSwitchNavigator(
    {
      Loading: AuthLoading,
      LoggedIn: SignedIn,
      LoggedOut: SignedOut,
      Dash: HousehldDash
    },
    {
      initialRouteName: 'Loading',
    }
)

export default createAppContainer(RootNavigator);