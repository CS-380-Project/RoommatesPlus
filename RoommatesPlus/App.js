import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import * as SQLite from 'expo-sqlite';
import Login from './scripts/Login';

export default class App extends Component {

  

  // front end render input fields and button
  render(){
    return (
      <View style = {styles.container}>
          <Login/>
      </View>
    
    );
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
