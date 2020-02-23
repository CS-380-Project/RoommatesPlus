import React, { Component } from 'react';
import { styles } from '../styles/style';
import CreateHouseHold from './CreateHouseHold';
import Profile from './Profile';
import Settings from './Settings';

const ProfileRoute = Profile;
const HouseHoldRoute = CreateHouseHold;
const SettingRoute = Settings;

// class Dashboard extends Component {
//   state = {
//     index: 0,
//     routes: [
//       { key: 'profile', title: 'Profile', icon: 'account' },
//       { key: 'house', title: 'Household', icon: 'houzz' },
//       { key: 'settings', title: 'Settings', icon: 'settings' },
//     ],
//   };

//   _handleIndexChange = index => this.setState({ index });
  
//   printIndex(){
//     console.log(index);
//   }
//   _renderScene = BottomNavigation.SceneMap({
//     profile: ProfileRoute,
//     house: HouseHoldRoute,
//     settings: SettingRoute,
//   });

//   render(){
//     return (
//           <BottomNavigation
//           navigationState={this.state}
//           onIndexChange={this._handleIndexChange}
//           renderScene={this._renderScene}/> 
  
//     );
//   }
  
// }

// const Tab = createMaterialBottomTabNavigator();

// export default function BottomTabNavigator () {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Profile" component={Profile} />
//         <Tab.Screen name="Household" component={CreateHouseHold} />
//         <Tab.Screen name="Settings" component={Settings} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default function MyTabs() {
//   return (
//       <NavigationContainer>
//             <BottomNavigation
//                 navigationState={this.state}
//                 onIndexChange={this._handleIndexChange}
//                 renderScene={this._renderScene}/>
//       </NavigationContainer>
//   );
// }

