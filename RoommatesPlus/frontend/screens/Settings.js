import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, AsyncStorage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Header, Left, Icon} from 'native-base';
import firebase from 'firebase'; 
export default class Settings extends Component {
    
    onSignOutButtonPress = () => {
        firebase.auth().signOut()
        .then(() => {
            this._signOutAsync()
            console.log('sign out successful')
        })
        .catch((error) => {
            console.log('sign out error...')
            console.log(error.message)
        })
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        try {
            this.props.navigation.navigate('Loading')
        }
        catch(error) {
            console.log('couldnt go back to root stack')
        }    
    };

    render(){
        return(
            <View style = {{flex: 1}}>
                <Header style = {styles.header}>
                    <Left style = {{flex: 1, marginHorizontal: 10}}>
                    <Icon name={'menu'} style={{color: 'black'}} onPress={() => this.props.navigation.openDrawer()}/>
                    </Left>
                </Header>
                <View style = {styles.container}>
                    <Text style={styles.headline} >Settings</Text>
                    
                    <TouchableOpacity style={styles.button}
                    onPress={this.onSignOutButtonPress}>
                        <Text style={styles.buttonText}>Log out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}