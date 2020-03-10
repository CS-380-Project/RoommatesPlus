import React, { Component } from 'react';
import RootNavigator from './backend/Navigation';
import Fire from './backend/Fire';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthLoadingScreen from './backend/AuthLoadingScreen';

export default class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  // front end render input fields and button
  render(){
    return (
        <SafeAreaProvider>
          <RootNavigator/>
        </SafeAreaProvider>
    );
  }
}   