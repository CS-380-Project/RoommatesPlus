import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Profile extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <Text style={styles.headline}>Profile</Text>
                <Text style={styles.headline}>Name: </Text>
                <Text style={styles.headline}>Gender: </Text>
                <Text style={styles.headline}>Phone Number: </Text>
                <Text style={styles.headline}>Email: </Text>
            </View>
        );
    }
}