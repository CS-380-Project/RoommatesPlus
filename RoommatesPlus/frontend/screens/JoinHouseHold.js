import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';
import Fire from '../../backend/Fire';
import {Header, Left, Icon} from 'native-base';


export default class JoinHouseHold extends Component {
    state = {
        houseSearch: '',
        houseFound: '',
        houseID: '',
    }
    
    joinHousehold = () =>{
        let thisUser = Fire.shared.udi.uid;
        let updateNested = firebase.firestore().collection('households').doc(this.state.houseID).update({
            "members": firebase.firestore.FieldValue.arrayUnion(thisUser)
        })
        .then(() => {
            console.log("success")
        })
        .catch(err => {
            console.log(err)
        });          
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
           <View style = {{flex: 1}}>
                <Header style = {styles.header}>
                    <Left style = {{flex: 1, marginHorizontal: 10}}>
                        <Icon name={'menu'} style={{color: 'black'}} onPress={() => this.props.navigation.openDrawer()}/>
                    </Left>
                </Header>
            <View style = {styles.container}>
                <Text style={styles.headline}>Household Name</Text>
                <TextInput style = {styles.textInput} placeholder = "Enter any name!" 
                value = {this.state.houseSearch}
                onChangeText={(houseSearch) => this.setState({houseSearch})}/>                 
                
                <TouchableOpacity style = { styles.button } onPress = {this.getHouseholdInfo.bind()}>
                    <Text style = { styles.buttonText }>Search</Text>
                </TouchableOpacity>
            </View>
          </View>
        );
    }
}