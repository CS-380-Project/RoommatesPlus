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
      
      let userToken = await AsyncStorage.getItem('userToken');
  
      if(userToken == 'LoggedIn') {
        
        let email = this.state.emailCur
        let userRef = firebase.firestore().collection("users")
        let query = userRef
          .where("email", "==", email)
          .get()
          .then(snapshot => {
            if (snapshot.empty) {
              console.log("No matching documents.")
              return;
            }
            snapshot.forEach(doc => {
              console.log(doc.id, "=>", doc.data())
              
              this.state.householdID = doc.data().houseID

              if (this.state.householdID == '') {
                console.log('houseID null!')
                this.props.navigation.navigate("NoHousehold");
              } else {
                console.log('houseID not null')
                this.props.navigation.navigate("LoggedIn");
              }
            });
          });
      }  
      else {
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