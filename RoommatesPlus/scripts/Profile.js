import React, { Component } from 'react';
import { styles } from '../style/styles';
import { Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Profile extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <Text>Profile</Text>
            </View>
        );
    }
}