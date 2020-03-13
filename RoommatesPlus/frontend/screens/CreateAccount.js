import React, { Component } from "react";
import { styles } from "../styles/style";
import {
  Text,
  View,
  TextInput,
  Alert,
  StyleSheet,
  Image,
  KeyboardAvoidingView
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "firebase";

export default class CreateAccount extends Component {
  state = {
    email: "",
    password: "",
    confirm_password: "",
    errorMessage: null
  };

  onSubmitButtonPress = () => {
    if (this.state.password !== this.state.confirm_password) {
      Alert.alert("Passwords do not match!");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(userCredentials => {
          return userCredentials.user.updateProfile({
            displayName: this.state.firstName
          });
        })
        .then(() => {
          this.props.navigation.navigate("UserInfo");
          console.log("Account created!");
        })
        .catch(error => {
          Alert.alert(error.message);
          console.log(error.message);
        });
    }
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
            <Text style={styles.CreateAccountheader}>Registration</Text>

            <TextInput
              style={styles.CreateAccounttextInput}
              placeholder="Email Address"
              placeholderTextColor="black"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />

            <TextInput
              style={styles.CreateAccounttextInput}
              secureTextEntry
              placeholder="Password"
              placeholderTextColor="black"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />

            <TextInput
              style={styles.CreateAccounttextInput}
              secureTextEntry
              placeholder="Confirm Password"
              placeholderTextColor="black"
              onChangeText={confirm_password =>
                this.setState({ confirm_password })
              }
            />

            <TouchableOpacity
              style={styles.CreateAccountbutton}
              onPress={this.onSubmitButtonPress}
            >
              <Text style={styles.CreateAccountbuttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
