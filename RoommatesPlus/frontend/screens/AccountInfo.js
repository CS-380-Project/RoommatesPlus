import React, { Component } from "react";
import { styles } from "../styles/style";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "firebase";
import { AsyncStorage } from "react-native";
import Fire from "../../backend/Fire";

export default class AccountInfo extends Component {
  state = {
    firstName: "",
    lastName: "",
    gender: "",
    householdID: null,
    phoneNumber: ""
  };

  onUserInfoSubmitPress = async () => {
    firebase
      .firestore()
      .collection("users")
      .doc(Fire.shared.udi.uid)
      .set({
        email: Fire.shared.udi.email,
        first_name: this.state.firstName,
        gender: this.state.gender,
        last_name: this.state.lastName,
        houseID: "null",
        phone: this.state.phoneNumber
      })
      .then(() => {
        console.log("User Data added!");
        this._createAccountInAsync();
      })
      .catch(error => {
        Alert.alert(error.message);
        console.log(error.message);
      });
  };

  _createAccountInAsync = async () => {
    await AsyncStorage.setItem("userToken", "LoggedIn");
    await AsyncStorage.setItem("userUID", Fire.shared.udi.uid);

    this.props.navigation.navigate("NoHousehold");
  };

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View style={styles.container}>
          <View style={{ ...StyleSheet.absoluteFill }}>
            <Image
              source={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/roommatesplus-15f85.appspot.com/o/wal2.jpg?alt=media&token=89aa0b8c-3687-4eaa-9198-c17418499e72"
              }}
              style={{ flex: 1 }}
            />
          </View>

          <View style={{ justifyContent: "center", height: 800 }}>
            <Text style={styles.CreateAccountheader}>Account Info</Text>

            <TextInput
              style={styles.CreateAccounttextInput}
              placeholder="First Name"
              placeholderTextColor="black"
              value={this.state.firstName}
              onChangeText={firstName => this.setState({ firstName })}
            />

            <TextInput
              style={styles.CreateAccounttextInput}
              placeholder="Last Name"
              placeholderTextColor="black"
              value={this.state.lastName}
              onChangeText={lastName => this.setState({ lastName })}
            />

            <TextInput
              style={styles.CreateAccounttextInput}
              placeholder="Gender"
              placeholderTextColor="black"
              value={this.state.gender}
              onChangeText={gender => this.setState({ gender })}
            />

            <TextInput
              style={styles.CreateAccounttextInput}
              placeholder="Phone Number"
              placeholderTextColor="black"
              value={this.state.phoneNumber}
              onChangeText={phoneNumber => this.setState({ phoneNumber })}
            />

            <TouchableOpacity
              style={styles.CreateAccountbutton}
              onPress={this.onUserInfoSubmitPress}
            >
              <Text style={styles.CreateAccountbuttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
