import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import Fire from '../../backend/Fire';
import firebase from 'firebase';
import { Alert } from 'react-native';


export default class Login extends Component {
  state = {
    email:'',
    password: '',
    dataBaseContents: ''
  };
  
  onLoginButtonPress = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            this.props.navigation.navigate('Roommates')
            console.log('login successful')
        }).catch((error) => {
            Alert.alert('Invalid email or password!')
            console.log('Login Failed')
        });
  };

  // front end render input fields and button
  render(){
    return (
      <View style={styles.container}>
        <Text>Email</Text>

        <TextInput style = {styles.textInput}  placeholder="Enter your email"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}/>

        <Text style={{marginBottom: 5, marginTop: 15}}>Password</Text>

        <TextInput  secureTextEntry style = {styles.textInput} placeholder = "enter password"  onChangeText={(password) => this.setState({password})}
            value={this.state.password}/>
        
        <TouchableOpacity onPress = {this.onLoginButtonPress}
          style = {styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
       
        <TouchableOpacity onPress = {() => this.props.navigation.navigate('CrtAccountScreen')}
          style = {styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Roommates')}
          style = {styles.button}>
          <Text style={styles.buttonText}>Go To Dashboard</Text>
        </TouchableOpacity>       
      </View>
    );
  }
}   


