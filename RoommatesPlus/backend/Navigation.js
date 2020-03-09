import  React from 'react';

// Navigation Imports
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

// https://oblador.github.io/react-native-vector-icons/ for icons list, change /FontAwesome for different section
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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
import Chores from '../frontend/screens/Chores';
import Messaging from '../frontend/screens/Messaging';
import Calendar from '../frontend/screens/Calendar';
import ChatScreen from '../frontend/screens/ChatScreen';
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

// Bottom Tab Navigator for Profile, Household, and Settings Screens
const SignedIn = createMaterialBottomTabNavigator(
    {
      Chores: {
        screen: Chores,
        navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => (<Icon size={25} name={'check-square-o'} style={{ color: tintColor }} />)
        }
      },

      Household: { 
        screen: JoinHouseHold,
     },
      Calendar: {
        screen: Calendar, 
        navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => (<Icon size={25} name={'calendar'} style={{ color: tintColor }} />)
        }
      },
      Members:{
        screen: HouseHoldMembers,
        navigationOptions:{
          tabBarIcon: ({ tintColor, focused }) => (<Icon size={22} name={'users'} style={{ color: tintColor }} />)
        }
      },
      Messaging: {
        screen: Messaging,
        navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => (<Icon size={22} name={'comments'} style={{ color: tintColor }} />)
        }
      },
      ChatScreen: {
        screen: ChatScreen
      }
    
    },
    
    {
      initialRouteName: 'Chores',
      shifting: 'true',
      activeColor: 'white',
      inactiveColor: 'black',
      barStyle: { backgroundColor: '#AB0032',  },
    }
  );
  
  const CustomComponent = (props) => (
    <SafeAreaView style={{flex : 1}}>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  )

  const ProfileDrawer = createDrawerNavigator(
    {
      Home: {
        screen: SignedIn,
        navigationOptions: {
          drawerIcon: ({ tintColor, focused }) => (<Icon size={25} name={'home'} style={{ color: tintColor }} />)
        }  
      },
      Account: {
        screen: Profile,
        navigationOptions: {
          drawerIcon: ({ tintColor, focused }) => (<Icon size={25} name={'user'} style={{ color: tintColor }} />)
        }
      },
      'My Household': { 
        screen: JoinHouseHold,
        navigationOptions: {
          drawerIcon: ({ tintColor, focused }) => (<MIcon size={25} name={'home-account'} style={{ color: tintColor }} />)
        }
      },
      Settings: {
        screen: Settings,
        navigationOptions: {
          drawerIcon: ({ tintColor, focused }) => (<Icon size={25} name={'gear'} style={{ color: tintColor }} />)
        }
      },
      'Dev To Do List (Delete me later)': { 
        screen: HouseHoldDashboard,
        navigationOptions: {
          drawerIcon: ({ tintColor, focused }) => (<MIcon size={25} name={'home-account'} style={{ color: tintColor }} />)
        }
      }
    },
    {
      contentComponent: CustomComponent,
      contentOptions: {
        activeTintColor: '#AB0032'
      }
    }
  );

// Root Switch Navigator used for clean authentication flow
const RootNavigator = createSwitchNavigator(
    {
      Loading: AuthLoading,
      LoggedIn: ProfileDrawer,
      LoggedOut: SignedOut,
    },
    {
      initialRouteName: 'Loading',
    }
)

export default createAppContainer(RootNavigator);