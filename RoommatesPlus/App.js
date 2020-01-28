import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default class App extends Component {
  state = {
    email:'',
    password: ''
  };

  render(){
    return (
      <View style={styles.container}>
        <Text>Email</Text>
        <TextInput style = {styles.textInput}  placeholder="Enter your email"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}></TextInput>
        <Text>Password</Text>
        <TextInput style = {styles.textInput} placeholder = "enter password" onChangeText={(password) => this.setState({password})}
            value={this.state.password}></TextInput>
        <Button title = "Login"></Button>
        <Text>{this.state.email}</Text>
        <Text>{this.state.password}</Text>
      </View>
    );
  }
  
}

function Login() {

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    height: 40,
    width: 120,
    borderColor: 'gray',
    borderWidth: 1
  }
});
