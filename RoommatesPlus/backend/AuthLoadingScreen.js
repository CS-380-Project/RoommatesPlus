import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native';
import { StyleSheet } from 'react-native';
import firebase from 'firebase';
import Fire from './Fire';

export default class AuthLoadingScreen extends React.Component {
    constructor() {
      super();
      this.findDocId()
      this._bootstrapAsync()
    }

    state = {
      emailCur: '',
      householdID: '',
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
      console.log('Inside _bootstrapAsync')
      let userToken = await AsyncStorage.getItem('userToken');
  
      console.log('after grabbing userToken from async storage')

      if(userToken == 'LoggedIn') {
        console.log('userToken: LoggedIn')
        
        let thisUserID = await AsyncStorage.getItem('userUID')
        
        console.log('thisUserHouse', thisUserID)

        // let updateNested = firebase.firestore().collection("households").doc(this.state.houseID)
        let userRef = firebase.firestore().collection("users").doc(thisUserID).get()
          .then(doc => {
            if (!doc.exists) {
              console.log("No doc exists.")
              return;
            }
            else {
              this.state.householdID = doc.data().houseID

              if (this.state.householdID == '' || this.state.householdID == 'null') {
                console.log('houseID null!')
                this.props.navigation.navigate("NoHousehold");
              } else {
                console.log('houseID not null')
                this.props.navigation.navigate("LoggedIn");
              }
            }
          })  
          .catch(err => {
            console.log('error retrieving doc.')
          });  
      }  
      else {
        console.log('User signed out, navigating to LoggedOut state')
        this.props.navigation.navigate('LoggedOut');
      }
    };

    findDocId = async () => {
        if(firebase.auth().currentUser != null){
          Fire.shared.findDocId('users', 'email', firebase.auth().currentUser.email);
          this.state.emailCur = firebase.auth().currentUser.email;
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