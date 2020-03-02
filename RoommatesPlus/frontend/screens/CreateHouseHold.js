import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, TextInput,Image,StyleSheet, KeyboardAvoidingView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class CreateHouseHold extends Component {
    render() {
        return(
            <KeyboardAvoidingView style={{flex:1}} behavior="padding">
            <View style = {styles.container}>
                <View style={{...StyleSheet.absoluteFill}}>
        <Image source={{ uri: "https://firebasestorage.googleapis.com/v0/b/roommatesplus-15f85.appspot.com/o/wal2.jpg?alt=media&token=89aa0b8c-3687-4eaa-9198-c17418499e72" }}
          style={{flex:1}}
          />
        </View>
                <Text style={styles.CreateHouseholdheader}>Household Name</Text>
                <TextInput style = {styles.CreateHouseholdtextInput} placeholder = "Enter any name!" placeholderTextColor = "black"> 
                </TextInput>
                
                
                <TouchableOpacity style = { styles.CreateHouseholdbutton } onPress = {this.onPress}>
                    <Text style = { styles.CreateHouseholdbuttonText }>Finish</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        );
    }
}