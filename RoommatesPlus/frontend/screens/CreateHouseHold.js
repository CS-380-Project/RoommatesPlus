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
import Fire from "../../backend/Fire";
import firebase from "firebase";

export default class CreateHouseHold extends Component {
  state = {
    houseName: ""
  };

  onCreateHousePress = () => {
    let thisUser = Fire.shared.udi.uid;

    firebase
      .firestore()
      .collection("households")
      .add({
        nickname: this.state.houseName,
        head: thisUser,
        members: firebase.firestore.FieldValue.arrayUnion(thisUser)
      })
      .then(() => {
        console.log("Household Data added!");
        Alert.alert(
          "Household Created!",
          "You are now the head of household.",
          [
            { text: "Continue", onPress: () => console.log("Continue pressed") }
          ],
          { cancelable: false }
        );
      })
      .catch(error => {
        Alert.alert(error.message);
        console.log(error.message);
      });
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
            <Text style={styles.CreateAccountheader}>Household Name</Text>
            <TextInput
              onChangeText={houseName => this.setState({ houseName })}
              style={styles.CreateAccounttextInput}
              placeholder="Give it a nickname!"
              placeholderTextColor="black"
            ></TextInput>

            <TouchableOpacity
              onPress={this.onCreateHousePress}
              style={styles.CreateAccountbutton}
            >
              <Text style={styles.CreateAccountbuttonText}>
                Create Household
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
