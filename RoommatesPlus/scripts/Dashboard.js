import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, AppRegistry, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { Appbar } from 'react-native-paper';
export default class Dashboard extends Component {
render(){
  return (

   <SafeAreaView style>
          
           <Appbar style={styles.bottom}>
        <Appbar.Action icon="house" onPress = {() => this.props.navigation.navigate('House')} />
        <Appbar.Action icon="profile" onPress = {() => this.props.navigation.navigate('House')} />
        <Appbar.Action icon="settings" onPress = {() => this.props.navigation.navigate('House')} />

      </Appbar>

<Button
          title="Create_Household"
          
          onPress = {() => this.props.navigation.navigate('House')}
        />

<Button
          title="Join Household"
          
          onPress={() => Alert.alert('links to page for join household')}
        />

<View
  style={{
    marginTop: 700,
  }}
/>
   </SafeAreaView>   
  );
}

}

const styles = StyleSheet.create({
  bottom: {
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
