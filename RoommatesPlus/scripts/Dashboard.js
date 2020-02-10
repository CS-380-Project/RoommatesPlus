<<<<<<< HEAD
import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const ProfileRoute = () => <Text>Profile</Text>;


const HouseHoldRoute = () => <Text>HouseHold</Text>;

const SettingRoute = () => <Text>Settings</Text>;

export default class MyComponent extends React.Component {
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

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
=======
import React, { Component } from 'react';
import { styles } from '../style/styles';
import { Text, View, Button, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class Dashboard extends Component {
render(){
  return (

   <View style={styles.header}>
     
     <TouchableOpacity style = {styles.button}
     onPress = {() => this.props.navigation.navigate('CrtHsHld')}>
       <Text style = {styles.buttonText}>Create Household</Text>
     </TouchableOpacity>
     
     <TouchableOpacity style = {styles.button} 
     onPress = {() => this.props.navigation.navigate('JnHsHld')}>
       <Text style = {styles.buttonText}>Join Household</Text>
     </TouchableOpacity>

     <View
       style={{
         borderBottomColor: 'black',
         borderBottomWidth: 1,
         marginTop: 650,
       }}
     />

     <Text style ={styles.footer}>Roommates</Text>
   </View>   
  );
}
}

>>>>>>> dc397edf9490cf29bec9c0eeded6484f41f57735
