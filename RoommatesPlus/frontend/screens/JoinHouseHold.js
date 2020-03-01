import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';

export default class CreateHouseHold extends Component {
    state = {
        houseSearch: '',
        houseFound: '',
    }
    
    getHouseholdInfo = () => {
        console.log(this.state.houseSearch);
        let houseHolds = firebase.firestore().collection('households');
        let query = houseHolds.where('nickname', '==', this.state.houseSearch).get()
        .then(snapshot => {
            console.log("ran snapshot");
            if (snapshot.empty){
                console.log('Household not found');
                return;
            }

            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
                this.setState({
                    houseFound: doc.data().nickname, 
                })
                           
            })
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
                
                <TouchableOpacity style = { styles.button } onPress = {this.getHouseholdInfo}>
                    <Text style = { styles.buttonText }>Search</Text>
                </TouchableOpacity>
                <Text>{this.state.houseFound}</Text>
            </View>
        );
    }
}