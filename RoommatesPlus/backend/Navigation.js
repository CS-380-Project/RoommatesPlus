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

// Load Screen
const AuthLoading = AuthLoadingScreen

// Stack Navigator for Login & Create Account Screens
const SignedOut = createStackNavigator({
    LoginScreen: {
      screen: Login,
      navigationOptions: {
        header: null
      } 
    },
    CrtAccountScreen: {
      screen: CreateAccount,
      navigationOptions: {
        header: null
      }
    },   
    UserInfo: {
      screen: AccountInfo,
      navigationOptions: {
        header: null
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
    },
    {
      initialRouteName: 'Loading',
    }
)

export default createAppContainer(RootNavigator);