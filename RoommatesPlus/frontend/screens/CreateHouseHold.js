import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class CreateHouseHold extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <Text style={styles.headline}>Household Name</Text>
                <TextInput style = {styles.textInput} placeholder = "Enter any name!"> 
                </TextInput>

                <TouchableOpacity onPress = {() => this.props.navigation.navigate('Dash')}
          style = {styles.button}>
          <Text style={styles.buttonText}>go to household dashboard</Text>
        </TouchableOpacity>
            </View>
        );
    }
}