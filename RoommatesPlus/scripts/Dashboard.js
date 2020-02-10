import React, { Component } from 'react';
import { styles } from '../style/styles';
import { Text, View, Button, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class Dashboard extends Component {
render(){
  return (

   <View style={styles.header}>
     
     <TouchableOpacity style = {styles.button}
     onPress = {() => this.props.navigation.navigate('CrtHsHld')}>
       <Text style = {styles.buttonText}>Create Household</Text>
     </TouchableOpacity>
     
     <TouchableOpacity style = {styles.button} 
     onPress = {() => this.props.navigation.navigate('JnHsHld')}>
       <Text style = {styles.buttonText}>Join Household</Text>
     </TouchableOpacity>

     <View
       style={{
         borderBottomColor: 'black',
         borderBottomWidth: 1,
         marginTop: 650,
       }}
     />

     <Text style ={styles.footer}>Roommates</Text>
   </View>   
  );
}
}

