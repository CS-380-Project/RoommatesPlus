import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';
import Fire from '../../backend/Fire';

export default class JoinHouseHold extends Component {
    state = {
        houseSearch: '',
        houseFound: '',
        houseID: '',
        usersExist: false,
    }
    
    joinHousehold = () =>{
        let usersExist = false, data = {};
        let thisUser = Fire.shared.udi.uid;
        // check if the users field exists
        firebase.firestore().collection('households').doc(this.state.houseID).get()
        .then(doc =>{
            // should not run; already checked if household exists in getHouseholdInfo()
            if (!doc.exists){ 
                console.log("Household not found.");
                return;
            } else { 
                if (doc.data().members[0] != " "){
                    usersExist = true;
                    console.log("Ran this fucking block: " + usersExist);
                } else {
                    console.log("There are no users.");
                }

                console.log("2 time: " + usersExist);
            }  
        })
        .catch(err => {
            console.log("Error: ", err)
        });

        console.log("3 time: " + usersExist);

        if (usersExist){
            console.log("ran if");
            // users list already exists; add this user to it
            firebase.firestore().collection('households').doc(this.state.houseID).get()
            .then(doc =>{
                doc.update({
                    members: arrayUnion(thisUser)
                });
            })
            .catch(err => {
                console.log("Error: ", err)
            });
        } else {
            console.log("ran else");
            // create a new users field and set it with the user email
            firebase.firestore().collection('households').doc(this.state.houseID).set({
                "members": [thisUser],
            }, {merge: true});
        }

    }

    getHouseholdInfo = () => {
        console.log(this.state.houseSearch);
        let houseHolds = firebase.firestore().collection("households");
        let query = houseHolds.where('nickname', '==', this.state.houseSearch).get()
        .then(snapshot => {
            if (snapshot.empty){
                Alert.alert(
                    'Household Not Found',
                    this.state.houseSearch + 'not found. Please try again.',     
                    [
                        { text: "cancel", onPress: () => console.log("cancel Pressed") }
                    ],                   
                    { cancelable: true},
                );
                return;
            }

            snapshot.forEach(doc => {
                this.setState({
                    houseID: doc.id,
                    houseFound: doc.data().nickname, 
                })
            })
            Alert.alert(
                'Household Found!',
                this.state.houseFound + ' found. Would you like to join the household?.',     
                [
                    { text: "Yes", onPress: this.joinHousehold },
                    { text: "No", onPress: () => console.log("No Pressed")}
                ],                   
                { cancelable: true},
            );
            return;
        })
        .catch(err => {
            console.log("Error getting household: ", err);
        });     
    }

    render() {
        return(
            <View style = {styles.container}>
                <Text style={styles.headline}>Household Name</Text>
                <TextInput style = {styles.textInput} placeholder = "Enter any name!" 
                value = {this.state.houseSearch}
                onChangeText={(houseSearch) => this.setState({houseSearch})}/>                 
                
                <TouchableOpacity style = { styles.button } onPress = {this.getHouseholdInfo.bind()}>
                    <Text style = { styles.buttonText }>Search</Text>
                </TouchableOpacity>
            </View>
        );
    }
}