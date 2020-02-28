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
  // Household: { 
  //   screen: CreateHouseHold,
  //   navigationOptions: {
  //     tabBarIcon: ({ tintColor, focused }) => (<Icon size={25} name={'home'} style={{ color: tintColor }} />)
  //   }
  // },
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
      Household: { 
        screen: JoinHouseHold,
        navigationOptions: {
          headerShown: true,
          tabBarIcon: ({ tintColor, focused }) => (<Icon size={25} name={'home'} style={{ color: tintColor }} />)
        }
      },
      Members:{
        screen: HouseHoldMembers,
        navigationOptions:{
          headerShown: true,
          tabBarIcon: ({ tintColor, focused }) => (<Icon size={22} name={'users'} style={{ color: tintColor }} />)
        }
      },
      Messages: {
        screen: Messaging,
        navigationOptions: {
          headerShown: true,
          tabBarIcon: ({ tintColor, focused }) => (<Icon size={22} name={'comments'} style={{ color: tintColor }} />)
        }
      }
    },
    {
      initialRouteName: 'Household',
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
      Settings: {
        screen: Settings,
        navigationOptions: {
          drawerIcon: ({ tintColor, focused }) => (<Icon size={25} name={'gear'} style={{ color: tintColor }} />)
        }
      }    
    },
    {
      contentComponent: CustomComponent,
      //activeTintColor: '#AB0032',
    }
  );

// Root Switch Navigator used for clean authentication flow
const RootNavigator = createSwitchNavigator(
    {
      Loading: AuthLoading,
      LoggedIn: ProfileDrawer,
      LoggedOut: SignedOut,
      Dash: HousehldDash
    },
    {
      initialRouteName: 'Loading',
    }
)

export default createAppContainer(RootNavigator);