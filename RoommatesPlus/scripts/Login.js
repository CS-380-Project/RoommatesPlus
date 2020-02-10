import React, { Component } from 'react';
import { styles } from '../style/styles';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("UserDatabase.db");

export default class Login extends Component {
  state = {
    email:'',
    password: '',
    dataBaseContents: ''
  };
  
  // function to create sqlite table
  componentDidMount() {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS users (email TEXT, password text);',[],()=>console.log("creeeated"),(a,b)=>console.log(b)
      );
      console.log("created table users ");
    });
  };

  // insert data into database 
  insert (email, password) {
    alert("WE HAVE LOGGED IN");
    const query = "INSERT INTO users (email, password) VALUES (?,?);";
    console.log(query);
    //it looks fine to me
    db.transaction(trx => {
        let trxQuery = trx.executeSql(
              query
            ,[email, password]
            ,(transact,resultset) => console.log('we made it',resultset)
            ,(transact,err) => console.log('We have encounter an Error', err)
        );
        trx.executeSql("SELECT * FROM users", [], (_, { rows }) =>
        console.log(JSON.stringify(rows)),
      );
    });
    
  }
  

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
        
        <TouchableOpacity onPress = {this.insert.bind(this, this.state.email, this.state.password)}
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

        <Text>Email retrieved from state: {this.state.email}</Text>
        <Text>Password retrieved from state: {this.state.password}</Text>
       
      </View>
    );
  }
}   


