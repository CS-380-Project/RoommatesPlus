import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, TextInput } from 'react-native';

export default class Messaging extends Component {

    render() {
        return (
            <View style = {styles.container}>
                <Text>Messaging Screen</Text>
            </View>
        );
    }
}