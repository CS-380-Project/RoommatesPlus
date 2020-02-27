import React, { Component } from 'react';
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

// styles
 styles = StyleSheet.create({
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

 AppNavigator = createStackNavigator({
 LoginScreen: Login,
  Roommates: Dashboard,
  CrtAccountScreen: CreateAccount,
  House: CreateHouseHold,
  JnHsHld: JoinHouseHold,
  CrtHsHld: CreateHouseHold,
  SettingView: Settings,
  LogoutScreen: Login,
  UserInfo: AccountInfo
});

  // componentDidMount() {
  //   Fire.shared.observeAuth()
  //     .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
  //     .catch(err => alert("An error occurred"));
  // }

  // front end render input fields and button
  render(){
    return (
        <RootNavigator/>
    );
  }
}   