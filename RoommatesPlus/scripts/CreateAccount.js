import React, { Component } from 'react';
import { styles } from '../style/styles';
import { Text, View, TextInput } from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("UserDatabase.db");

export default class CreateAccount extends Component {
    state = {
        email:'',
        password: '',
        dataBaseContents: ''
    };

    render() {
        return (
            <View style = {styles.container}>
                <Text>Name</Text>
                <TextInput style = {styles.textInput} placeholder = "First Name"/>
                <TextInput style = {styles.textInput} placeholder = "Last Name"/>

                <Text>Gender</Text>
                <TextInput style = {styles.textInput} placeholder = "Gender"/>

                <Text>Phone Number</Text>
                <TextInput style = {styles.textInput} placeholder = "Phone Number"/>

                <Text>Email</Text>
                <TextInput style = {styles.textInput} placeholder = "Email Address"/>

                <Text>Password</Text>
                <TextInput style = {styles.textInput} placeholder = "Password"/>
                <Text>Confirm Password</Text>
                <TextInput style = {styles.textInput} placeholder = "Confirm Password"/>
            </View>
        );
    }
}

