import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {BottomNavigation} from 'react-native-paper';
import Fire from '../../backend/Fire';
import firebase from 'firebase'; 

export default class Settings extends Component {
    
    onSignOutButtonPress = () => {
        firebase.auth().signOut()
        .then(() => {
            console.log('sign out successful')
            this.props.navigation.navigate('LoginScreen')
        })
        .catch((error) => {
            console.log('sign out error...')
            console.log(error.message)
        })
    };

    render(){
        return(
            <View style = {styles.container}>
                <Text>Settings</Text>
                
                <TouchableOpacity style={styles.button}
                onPress={this.onSignOutButtonPress}>
                    <Text style={styles.buttonText}>Log out</Text>
                </TouchableOpacity>

            </View>
            
        );
    }
}