//todo app https://codeburst.io/todo-app-with-react-native-f889e97e398e
import React, { Component } from "react";
import {AppRegistry, StyleSheet, Text, View, FlatList,
   AsyncStorage, Button, TextInput, Keyboard, Platform} from "react-native";
import {Header, Left, Icon} from 'native-base';
import firebase from 'firebase';
import Fire from "../../backend/Fire";

const isAndroid = Platform.OS == "android";
const viewPadding = 10;

let taskList;
export default class Chores extends Component {
  state = {
    tasks: [],
    text: "",
    choreListId: null
  };

  changeTextHandler = text => {
    this.setState({ text: text});
  };

  addTask = () => {
    let notEmpty = this.state.text.trim().length > 0;
    if (notEmpty) {
      this.setState(
        prevState => {
          let { tasks, text } = prevState;
          return {
            tasks: tasks.concat({ key: tasks.length, text:text}),
            text: ""
          };
        },
        () => Tasks.save(this.state.tasks)
      );
      
    }
  };

  addTaskToDatabase = () => {
    this.addTask();
    console.log("Addding TASK ");
      console.log("Addding " + this.state.text + " to database");
     // let admin = require('firebase-admin');
      let choreRef = firebase.firestore().collection('chores').doc('C3MyRnRY1RZZxNkIYF1t');
      let choreUnion = choreRef.update({
          choreList: firebase.firestore.FieldValue.arrayUnion(this.state.text)
        })
        .then(() => {
            console.log("success")
        })
        .catch(err => {
            console.log(err)
        });          

       
  };


  deleteTaskToDatabase = (index) => {
      let taskArray = Tasks.convertToStringWithSeparators(this.state.tasks).split('||');
      this.deleteTask();
      console.log("DELETING TASK ");
      console.log("DELETING " + this.state.text + " from database");
      let choreRef = firebase.firestore().collection('chores').doc('C3MyRnRY1RZZxNkIYF1t');
      let choreUnion = choreRef.update({
          choreList: firebase.firestore.FieldValue.arrayRemove(taskArray[index])
        })
        .then(() => {
            console.log("success")
        })
        .catch(err => {
            console.log(err)
        });          

       
  };

  deleteTask = i => {
    
    this.setState(
      prevState => {
        let tasks = prevState.tasks.slice();
        tasks.splice(i, 1);

        return { tasks: tasks };
      },
      () => Tasks.save(this.state.tasks)
    );
  };

  componentDidMount() {
    Keyboard.addListener(
      isAndroid ? "keyboardDidShow" : "keyboardWillShow",
      e => this.setState({ viewPadding: e.endCoordinates.height + viewPadding })
    );

    Keyboard.addListener(
      isAndroid ? "keyboardDidHide" : "keyboardWillHide",
      () => this.setState({ viewPadding: viewPadding })
    );

    Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
  }

  render() {
    taskList = Tasks.convertToStringWithSeparators(this.state.tasks).split('||');
    return (
      
        <View style = {{flex: 1}}>
        <Header style = {styles.header}>
            <Left style = {{flex: 1, marginHorizontal: 10}}>
            <Icon name={'menu'} style={{color: 'black'}} onPress={() => this.props.navigation.openDrawer()}/>
            </Left>
        </Header>
      <View
        style={[styles.container, { paddingBottom: this.state.viewPadding }]}
      >
        <FlatList
          style={styles.list}
          data={this.state.tasks}
          renderItem={({ item, index }) =>
            <View>
              <View style={styles.listItemCont}>
                <Text style={styles.listItem}>
                  {item.text}
                </Text>
                <Button title="X" onPress={() => this.deleteTaskToDatabase(index)} />
              </View>
              <View style={styles.hr} />
            </View>}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={this.changeTextHandler}
          onSubmitEditing={this.addTaskToDatabase}
          value={this.state.text}
          placeholder="Add Chore"
          returnKeyType="done"
          returnKeyLabel="done"
        />
      </View>
      </View>
    );
  }
};
 


let Tasks = {
  convertToArrayOfObject(tasks, callback) {
    return callback(
      tasks ? tasks.split("||").map((task, i) => ({ key: i, text: task })) : []
    );
  },
  convertToStringWithSeparators(tasks) {
    return tasks.map(task => task.text).join("||");
  },
  all(callback) {
    return AsyncStorage.getItem("TASKS", (err, tasks) =>
      this.convertToArrayOfObject(tasks, callback)
    );
  },
  save(tasks) {
    AsyncStorage.setItem("TASKS", this.convertToStringWithSeparators(tasks));
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: viewPadding,
    paddingTop: 20
  },
  header: {
    backgroundColor: '#AB0032'
  },
  list: {
    width: "100%"
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18
  },
  hr: {
    height: 1,
    backgroundColor: "gray"
  },
  listItemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textInput: {
    backgroundColor: '#ff5c5c',
    color: 'black',
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: isAndroid ? 0 : 1,
    width: "100%"
  },
 
});

