import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {AppRegistry} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import RootNavigator from './backend/Navigation';
import Fire from './backend/Fire';

export default class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  // plan to implement potentially

  // componentDidMount() {
  //   Fire.shared.observeAuth()
  //     .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
  //     .catch(err => alert("An error occurred"));
  // }

  // front end render input fields and button
  render(){
    return <RootNavigator/>;
  }
}   
