import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("UserDatabase.db");

export default class CreateHouseHold extends Component {
    state = {
        email:'',
        password: '',
        dataBaseContents: ''
    };

    render() {
        return (
            <View style = {styles.container}>
                <Text>House Name</Text>
                <TextInput style = {styles.textInput} placeholder = "House Name"/>

                <Text>Address</Text>
                <TextInput style = {styles.textInput} placeholder = "Optional"/>



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