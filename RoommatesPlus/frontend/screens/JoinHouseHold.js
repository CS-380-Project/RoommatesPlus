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
    
    render() {
        return (
            <View style = {{flex: 1}}>
                <Header style = {styles.header}>
                    <Left style = {{flex: 1, marginHorizontal: 10}}>
                        <Icon name={'menu'} style={{color: 'black'}} onPress={() => this.props.navigation.openDrawer()}/>
                    </Left>
                </Header>
                <View style = {styles.container}>
                    <Text style={styles.headline}>Join a Household Name</Text>
                    <TextInput style = {styles.textInput} placeholder = "Enter the house ID"/>
                    
                    <TouchableOpacity style={styles.button} onPress={this.onPress}>
                            <Text style={styles.buttonText}>Look up Household</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} onPress={this.onPress}>
                            <Text style={styles.buttonText}>Check Invites</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );     
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
