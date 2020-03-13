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
import Fire from "../../backend/Fire";
import { Header, Left, Icon } from "native-base";

export default class JoinHouseHold extends Component {
  constructor() {
    super();
    if (firebase.auth().currentUser != null) {
      // set document id
      Fire.shared.findDocId(
        "users",
        "email",
        firebase.auth().currentUser.email
      );
    }
  }

  state = {
    houseSearch: "",
    houseFound: "",
    houseID: ""
  };

  joinHousehold = async () => {
    let thisUser = Fire.shared.udi.uid;
    let updateNested = firebase
      .firestore()
      .collection("households")
      .doc(this.state.houseID)
      .update({
        members: firebase.firestore.FieldValue.arrayUnion(thisUser)
      })
      .then(() => {
        this.addHouseID();
      })
      .catch(err => {
        console.log(err);
      });
  };

  addHouseID = () => {
    let changeHouse = this.state.houseID;
    let ref = firebase
      .firestore()
      .collection("users")
      .doc(Fire.shared.DocId);
    firebase
      .firestore()
      .runTransaction(async transaction => {
        await transaction.get(ref);
        transaction.update(ref, {
          houseID: changeHouse
        });
      })
      .then(() => {
        console.log("houseID added to user");
        this.props.navigation.navigate("LoggedIn");
      })
      .catch(error => {
        console.log("transaction error", error);
      });
  };

  getHouseholdInfo = async () => {
    let houseHolds = firebase.firestore().collection("households");
    let query = houseHolds
      .where("nickname", "==", this.state.houseSearch)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          Alert.alert(
            "Household Not Found",
            this.state.houseSearch + "not found. Please try again.",
            [{ text: "cancel", onPress: () => console.log("cancel Pressed") }],
            { cancelable: true }
          );
          return;
        }

        snapshot.forEach(doc => {
          this.setState({
            houseID: doc.id,
            houseFound: doc.data().nickname
          });
        });
        Alert.alert(
          "Household Found!",
          this.state.houseFound +
            " found. Would you like to join the household?.",
          [
            { text: "Yes", onPress: this.joinHousehold },
            { text: "No", onPress: () => console.log("No Pressed") }
          ],
          { cancelable: true }
        );
        return;
      })
      .catch(err => {
        console.log("Error getting household: ", err);
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
            <Text style={styles.CreateAccountheader}>House Search</Text>
            <TextInput
              style={styles.CreateAccounttextInput}
              placeholder="Search by nickname!"
              placeholderTextColor="black"
              value={this.state.houseSearch}
              onChangeText={houseSearch => this.setState({ houseSearch })}
            />

            <TouchableOpacity
              style={styles.CreateAccountbutton}
              onPress={this.getHouseholdInfo.bind()}
            >
              <Text style={styles.CreateAccountbuttonText}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
