import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native';
import { StyleSheet } from 'react-native';
import firebase from 'firebase';
import Fire from './Fire';

export default class AuthLoadingScreen extends React.Component {
    constructor() {
      super();
     //this.findDocId()
      this._bootstrapAsync()
      this.temp()
      }

    state = {
      householdID: '',
    }
    temp = async () => {
      await AsyncStorage.clear();
      console.log('cleared storage')
    }
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
      let userToken = await AsyncStorage.getItem('userToken');
  
      if(userToken == 'LoggedIn') {
        console.log('userToken: LoggedIn')
        
        let thisUserID = await AsyncStorage.getItem('userUID')
        
        firebase.firestore().collection("users").doc(thisUserID).get()
          .then(doc => {
            if (!doc.exists) {
              console.log("No such doc exists given thisUserID.")
              return;
            }
            else {
              this.state.householdID = doc.data().houseID

              if (this.state.householdID == '' || this.state.householdID == 'null') {
                console.log('houseID was null!')
                this.props.navigation.navigate("NoHousehold");
              } else {
                console.log('houseID was not null!')
                this.props.navigation.navigate("LoggedIn");
              }
            }
          })  
          .catch(err => {
            console.log('error retrieving this users doc.')
          });  
      }  
      else {
        console.log('userToken: LoggedOut')
        this.props.navigation.navigate('LoggedOut');
      }
    };

    findDocId = async () => {
        if(firebase.auth().currentUser != null){
          Fire.shared.findDocId('users', 'email', firebase.auth().currentUser.email);
        }
    };
  
    // Render any loading content that you like here
    render() {
      
      return (
        <View style={styles.container}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
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