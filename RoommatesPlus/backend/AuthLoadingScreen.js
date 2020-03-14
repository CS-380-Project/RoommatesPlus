import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native';
import { StyleSheet } from 'react-native';

export default class AuthLoadingScreen extends React.Component {
    constructor() {
      super();
     this.findDocId()
      this._bootstrapAsync()
      
      }

    state = {
      householdID: '',
    }
   
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
  
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate(userToken ? 'LoggedIn' : 'LoggedOut');
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