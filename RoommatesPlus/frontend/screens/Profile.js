import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Fire from '../../backend/Fire';
import firebase from 'firebase/firestore';
import UserData from '../../backend/UserData';

export default class Profile extends Component {
    state = {
        
    }

    getUserInfo () {
       
        let user = Fire.shared.udi;
        let data = Fire.shared.currentUserDoc();
       // console.log(user.uid);

    }

    render(){

        this.getUserInfo()

        return(
            <View style = {styles.container}>
                <Text>Profile</Text>
                <Text>Name: {UserData.shared.FirstName + ' ' + UserData.shared.LastName}</Text>
                <Text>Gender: {UserData.shared.Gender} </Text>
                <Text>Phone Number: {UserData.shared.PhoneNumber}</Text>
                <Text>Email: {UserData.shared.Email}</Text>
            </View>
        );
    }
}