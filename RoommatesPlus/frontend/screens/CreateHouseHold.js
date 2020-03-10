import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Fire from '../../backend/Fire';
import firebase from 'firebase';

export default class CreateHouseHold extends Component {
    state = {
        houseName: '',
    }
    
    onCreateHousePress = () => {
        let thisUser = Fire.shared.udi.uid;
        
        firebase.firestore().collection('households').add({
            nickname: this.state.houseName,
            head: thisUser,
            members: firebase.firestore.FieldValue.arrayUnion(thisUser),
        })
        .then(() => {
            console.log('Household Data added!')
            Alert.alert(
                'Household Created!',
                'You are now the head of household.',   
                [
                    { text: "Continue", onPress: () => console.log("Continue pressed") }
                ],                   
                { cancelable: false},
            );
        })
        .catch(error => {
            Alert.alert(error.message)
            console.log(error.message)
        });
    };

    render() {
        return(
            <KeyboardAvoidingView style={{flex:1}} behavior="padding">
            <View style = {styles.container}>
                <Text style={styles.headline}>Household Name</Text>
                <TextInput 
                onChangeText={(houseName) => this.setState({houseName})}
                style = {styles.textInput} placeholder = "Give it a nickname!"> 
                </TextInput>

                <TouchableOpacity onPress = {this.onCreateHousePress}
                style = {styles.button}>
                <Text style={styles.buttonText}>Create Household</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        );
    }
}