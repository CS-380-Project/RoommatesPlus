import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import {Header, Left, Icon} from 'native-base';
import {openDatabase} from 'react-native-sqlite-storage';
import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("UserDatabase.db");

export default class JoinHouseHold extends Component {
    
    render() {
        return (
            <View style = {styles.container}>
                <Text style={styles.headline}>Join a Household Name</Text>
                <TextInput style = {styles.textInput} placeholder = "Enter the house ID"/>
                
                <TouchableOpacity style={styles.button} onPress={this.onPress}>
                        <Text style={styles.buttonText}>Look up Household</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button} onPress={this.onPress}>
                        <Text style={styles.buttonText}>Check Invites</Text>
                </TouchableOpacity>
            </View>
        );
    }

}