import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, TextInput,StyleSheet,Dimensions, TouchableOpacity, Image, AsyncStorage} from 'react-native';
import firebase from 'firebase';
import { Alert } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const {width,height} = Dimensions.get('window')
export default class Login extends Component {
  state = {
    email:'',
    password: '',
    dataBaseContents: ''
  };
  
  onLoginButtonPress = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            this._signInAsync()
            console.log('login successful')
        }).catch((error) => {
            Alert.alert('Invalid email or password!')
            console.log('Login Failed')
        });
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'LoggedIn');
    this.props.navigation.navigate('LoggedIn')
    console.log('Now Switch to SignedIn Navigator')
  };

  // front end render input fields and button
  render(){
    return (
      <View style={{flex:1, backgroundColor: 'white', justifyContent:'flex-end'}}>
        <View style={{...StyleSheet.absoluteFill}}>
          <Image source={{ uri: "https://firebasestorage.googleapis.com/v0/b/roommatesplus-15f85.appspot.com/o/backimage.jpg?alt=media&token=485aedbd-8de0-46ce-bc0d-a2dc9071f435" }}
            style={{flex:1}}/>
        </View>
        <View style={{justifyContent: 'center', height: 400 }}>

        <Text style={styles.headline}>Email</Text>

        <TextInput style = {styles.textInput}  placeholder="Enter your email"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}/>

        <Text style={styles.headline}>Password</Text>

        <TextInput  secureTextEntry style = {styles.textInput} placeholder =  "enter password"  
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}/>

        <TouchableOpacity onPress = {this.onLoginButtonPress}
          style = {styles.button}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress = {() => this.props.navigation.navigate('CrtAccountScreen')}
          style = {styles.button}>
          <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>

        </View>             
      </View>
    );
    }
}   


