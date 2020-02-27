import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Fire from '../../backend/Fire';
import UserData from '../../backend/UserData';
import firebase from 'firebase';

export default class Profile extends Component {
    state = {
        firstName: null,
        lastName: null,
        userEmail: null,
        gender: null,
        houseID: null,
        phoneNumber: null
    }

    getUserInfo () {
        
        let email = firebase.auth().currentUser.email;
        let userRef = firebase.firestore().collection('users');
        let query = userRef.where('email', '==', email).get()
        .then(snapshot => {
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }  
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
                this.setState({
                    firstName: doc.data().first_name,
                    lastName:  doc.data().last_name,
                    userEmail: email,
                    gender: doc.data().gender,
                    houseID: 'null',
                    phoneNumber: doc.data().phone
                })
            })          
        })
        .catch(err => {
            console.log('Error getting documents', err);
        }); 
       
    }

    resetData(){
        console.log('we reseting iterere');
        this.setState({
            firstName: 'null',
            lastName: null,
            userEmail: null,
            gender: null,
            houseID: null,
            phoneNumber: null
        })
    }

    render(){
        if (firebase.auth().currentUser != null && this.state.firstName == null){
            this.getUserInfo()
        }
        
    
        return(
            <View style = {styles.container}>
                <Text style={styles.headline}>Profile</Text>
                <Text style={styles.headline}>Name: {this.state.firstName + ' ' + this.state.lastName}</Text>
                <Text style={styles.headline}>Gender: {this.state.gender}</Text>
                <Text style={styles.headline}>Phone Number: {this.state.phoneNumber}</Text>
                <Text style={styles.headline}>Email: {this.state.userEmail}</Text>
            </View>
        );
    }
}