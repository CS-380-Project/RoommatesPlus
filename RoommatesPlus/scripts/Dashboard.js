import React, { Component } from 'react';
import { styles } from '../style/styles';
import { Text, View, Button, Alert, SafeAreaView, TouchableOpacity, } from 'react-native';
import { BottomNavigation} from 'react-native-paper';
import Constants from 'expo-constants';
import CreateHouseHold from './CreateHouseHold';
import Profile from './Profile';
import Settings from './Settings';

const ProfileRoute = Profile;
const HouseHoldRoute = CreateHouseHold;
const SettingRoute = Settings;

export default class Dashboard extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'profile', title: 'Profile', icon: 'account' },
      { key: 'house', title: 'Household', icon: 'houzz' },
      { key: 'settings', title: 'Settings', icon: 'settings' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    profile: ProfileRoute,
    house: HouseHoldRoute,
    settings: SettingRoute,
  });

  render(){
  return (

    <BottomNavigation
      navigationState={this.state}
      onIndexChange={this._handleIndexChange}
      renderScene={this._renderScene}
    />   
    );
  }
}
