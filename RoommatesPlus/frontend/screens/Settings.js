import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, AsyncStorage,StyleSheet,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
            <View style = {styles.container}>
                <View style={{...StyleSheet.absoluteFill}}>
        <Image source={{ uri: "https://firebasestorage.googleapis.com/v0/b/roommatesplus-15f85.appspot.com/o/wal2.jpg?alt=media&token=89aa0b8c-3687-4eaa-9198-c17418499e72" }}
          style={{flex:1}}
          />
        </View>
                <Text style={styles.Settingsheader} >Settings</Text>
                
                <TouchableOpacity style={styles.Settingsbutton}
                onPress={this.onSignOutButtonPress}>
                    <Text style={styles.SettingsbuttonText}>Log out</Text>
                </TouchableOpacity>
            </View>
        );
    }
}