import React, { Component } from 'react';
import { styles } from '../style/styles';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Fire from '../Fire';

export default class Settings extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <Text>Settings</Text>
                
                <TouchableOpacity style={styles.button}
                onPress={() => Fire.shared.signOut() }>
                    <Text style={styles.buttonText}>Log out</Text>
                </TouchableOpacity>

            </View>
            
        );
    }
}