import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase'; 

export default class CreateAccount extends Component {
    state = {
        email:'',
        password: '',
        confirm_password: '',
        errorMessage: null
    };

    onSubmitButtonPress = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(userCredentials => {
            return userCredentials.user.updateProfile({
                displayName: this.state.firstName
            });
        })
        .then(() => {
            this.props.navigation.navigate('UserInfo')
            console.log('Account created!')
        })
        .catch(error => {
            Alert.alert(error.message)
            console.log(error.message)
        });
    };

    render() {
        return (
            <View style = {styles.container}>
                <View style={{justifyContent: 'center', height: 800 }}>

                <Text style={styles.headline}>Email</Text>
                <TextInput style = {styles.textInput} placeholder = "Email Address"
                value={this.state.email}
                 onChangeText={(email) => this.setState({email})}/>

                <Text style={styles.headline}>Password</Text>
                <TextInput style = {styles.textInput} placeholder = "Password" 
                value={this.state.password}
                onChangeText={(password) => this.setState({password})}/>
                
                <Text style={styles.headline}>Confirm Password</Text>
                <TextInput style = {styles.textInput} placeholder = "Confirm Password"/>

                <TouchableOpacity style={styles.button} 
                onPress = {this.onSubmitButtonPress}>
                <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

