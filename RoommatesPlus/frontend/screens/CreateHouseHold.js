import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class CreateHouseHold extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <Text>Household Name</Text>
                <TextInput style = {styles.textInput} placeholder = "Enter any name!"> 
                </TextInput>
                
                
                <TouchableOpacity style = { styles.button } onPress = {this.onPress}>
                    <Text style = { styles.buttonText }>Finish</Text>
                </TouchableOpacity>
            </View>
        );
    }
}