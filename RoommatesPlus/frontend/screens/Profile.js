import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, TextInput,StyleSheet,Image,KeyboardAvoidingView } from 'react-native';
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
        phoneNumber: null,
        newName: ''
    }

    getUserInfo () {
        console.log('userInfo');
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
                //UserData.shared.setDocId(doc.id);
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


  
    render(){

        
        if (firebase.auth().currentUser != null && this.state.firstName == null){
            this.getUserInfo()
            // set document id
            Fire.shared.findDocId('users', 'email', firebase.auth().currentUser.email);
        }
        
    
        return(
           
            <View style = {styles.container}>
                <View style={{...StyleSheet.absoluteFill}}>
        <Image source={{ uri: "https://firebasestorage.googleapis.com/v0/b/roommatesplus-15f85.appspot.com/o/wal2.jpg?alt=media&token=89aa0b8c-3687-4eaa-9198-c17418499e72" }}
          style={{flex:1}}
          />
        </View>
                <Text style={styles.Profileheader}>Profile</Text>
                <Text style={styles.Profileheader}>Name: {this.state.firstName + ' ' + this.state.lastName}</Text>
                <Text style={styles.Profileheader}>Gender: {this.state.gender}</Text>
                <Text style={styles.Profileheader}>Phone Number: {this.state.phoneNumber}</Text>
                <Text style={styles.Profileheader}>Email: {this.state.userEmail}</Text>

                {/*Testing for editing existing database data*/}
                {/* <TextInput style = {styles.textInput}  onChangeText={(newName) => this.setState({newName})}
                    value={this.state.newName} ></TextInput>
                <TouchableOpacity style = {styles.button} on onPress = { console.log('new namea =========> '+ this.state.newName),  this.editName.bind()} >
                    <Text style = {styles.buttonText}>Change name</Text>
                </TouchableOpacity> */}
            </View>
            
        );
    }

    editName = () =>{
    
        changedName = this.state.newName;
        console.log('DOCUMENT ID:   ' + Fire.shared.DocId);
        const ref = firebase.firestore().collection('users').doc(Fire.shared.DocId);
        firebase.firestore().runTransaction(async transaction => {
            const doc = await transaction.get(ref);
            transaction.update(ref, {
                first_name: changedName,
            });

        }).then(()=>{
           this.getUserInfo();
        }).catch(error => {
            console.log('transaction big oof', error);
        })
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

}
