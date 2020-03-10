import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';
import {AsyncStorage} from 'react-native';
import Fire from '../../backend/Fire';

export default class AccountInfo extends Component {
    state = {
        firstName: '',
        lastName: '',
        gender: '',
        houseID: '',
        phoneNumber: ''
    };

    onUserInfoSubmitPress = () => {
        firebase.firestore().collection('users').add({
            email: Fire.shared.udi.email,
            first_name: this.state.firstName,
            gender: this.state.gender,
            last_name: this.state.lastName,
            phone: this.state.phoneNumber,
        })
        .then(() => {
            console.log('User Data added!')
            this._createAccountInAsync()
        })
        .catch(error => {
            Alert.alert(error.message)
            console.log(error.message)
        });
    };

    _createAccountInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'LoggedIn');
        this.props.navigation.navigate('LoggedIn')
        console.log('Account Created, switching to LoggedIn Navigator')
    };

    render() {
        return (
            <View style = {styles.container}>
                <Text>First Name</Text>
                <TextInput style = {styles.textInput} placeholder = "First Name"   value={this.state.firstName}
                 onChangeText={(firstName) => this.setState({firstName})}/>
                
                <Text>Last Name</Text>
                <TextInput style = {styles.textInput} placeholder = "Last Name"   value={this.state.lastName}
                 onChangeText={(lastName) => this.setState({lastName})}/>
                

                <Text>Gender</Text>
                <TextInput style = {styles.textInput} placeholder = "Gender"value={this.state.gender}
                onChangeText={(gender) => this.setState({gender})}/>

                <Text>Phone Number</Text>
                <TextInput style = {styles.textInput} placeholder = "Phone Number" value={this.state.phoneNumber}
                onChangeText={(phoneNumber) => this.setState({phoneNumber})}/>

                <TouchableOpacity style={styles.button} 
                onPress = {this.onUserInfoSubmitPress}>
                <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}