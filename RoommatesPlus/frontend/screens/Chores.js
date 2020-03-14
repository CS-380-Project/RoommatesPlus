//todo app https://codeburst.io/todo-app-with-react-native-f889e97e398e
import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  AsyncStorage,
  Button,
  TextInput,
  Keyboard,
  Platform,
  RefreshControl
} from "react-native";
import { Header, Left, Icon } from "native-base";
import firebase from "firebase";
import Fire from "../../backend/Fire";
import { ScrollView } from "react-native-gesture-handler";

const isAndroid = Platform.OS == "android";
const viewPadding = 10;

let taskList;
export default class Chores extends Component {
  state = {
    tasks: [],
    text: "",
    dbChoreList: null,
    refreshing: false
  };

  changeTextHandler = text => {
    this.setState({ text: text });
  };

  dbChoreListHandler = list => {
    this.setState({ dbChoreList: list });
  };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.updateTasksFromDatabase().then(() => {
      this.setState({ refreshing: false });
    });
  };

  updateTasksFromDatabase = () => {
    let i;
    for (i = 0; i <= this.state.tasks.length; i++) {
      let taskArray = Tasks.convertToStringWithSeparators(
        this.state.tasks
      ).split("||");
      console.log("\n\n\n\tdeleting task: " + i + " : " + taskArray[i]);
      this.deleteTask(0);
    }

    let cityRef = firebase
      .firestore()
      .collection("chores")
      .doc("C3MyRnRY1RZZxNkIYF1t");
    let getDoc = cityRef
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log("No such document!");
        } else {
          console.log("Document data:", doc.data());

          this.dbChoreListHandler(doc.data().choreList);

          console.log("dbChoreList: " + this.state.dbChoreList[0]);

          console.log("\n\n length of tasks " + this.state.tasks.length);

          for (i = 0; i < this.state.tasks.length; i++) {
            console.log("deleting task: " + i);
            this.deleteTask(i);
          }

          console.log(
            "\n\n first item in chorelist " + this.state.dbChoreList[0]
          );
          for (i = 0; i < this.state.dbChoreList.length; i++) {
            console.log(
              "\tdbchoreList " + i + ": " + this.state.dbChoreList[i]
            );
            this.changeTextHandler(this.state.dbChoreList[i]);
            console.log("\t\tthis.state.text: " + this.state.text);
            this.addTask();
          }
        }
      })
      .catch(err => {
        console.log("Error getting document", err);
      });
  };

  update = () => {
    this.state.tasks.forEach(deleteAll);

    function deleteAll(item, index) {
      this.deleteTask(index);
    }

    for (i = 0; i < this.state.tasks.length; i++) {
      console.log("deleting task: " + i);
      this.deleteTask(i);
    }
    for (i = this.state.tasks.length; i > 0; i--) {
      console.log("deleting task: " + i);
      this.deleteTask(i);
    }
    for (i = this.state.tasks.length; i >= 0; i--) {
      console.log("deleting task: " + i);
      this.deleteTask(i);
    }

    this.updateTasksFromDatabase();
  };

  deleteAll = (item, index) => {
    console.log("we delete " + index);
    this.deleteTask(index);
  };

  addTask = () => {
    let notEmpty = this.state.text.trim().length > 0;
    if (notEmpty) {
      this.setState(
        prevState => {
          let { tasks, text } = prevState;
          return {
            tasks: tasks.concat({ key: tasks.length, text: text }),
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
    let choreRef = firebase
      .firestore()
      .collection("chores")
      .doc("C3MyRnRY1RZZxNkIYF1t");
    let choreUnion = choreRef
      .update({
        choreList: firebase.firestore.FieldValue.arrayUnion(this.state.text)
      })
      .then(() => {
        console.log("success");
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteTaskFromDatabase = index => {
    let taskArray = Tasks.convertToStringWithSeparators(this.state.tasks).split(
      "||"
    );
    this.deleteTask(index);
    console.log("DELETING TASK ");
    console.log("DELETING " + this.state.text + " from database");
    let choreRef = firebase
      .firestore()
      .collection("chores")
      .doc("C3MyRnRY1RZZxNkIYF1t");
    let choreUnion = choreRef
      .update({
        choreList: firebase.firestore.FieldValue.arrayRemove(taskArray[index])
      })
      .then(() => {
        console.log("success");
      })
      .catch(err => {
        console.log(err);
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
    taskList = Tasks.convertToStringWithSeparators(this.state.tasks).split(
      "||"
    );

    // console.ignoredYellowBox = true;
    return (
      <View style={{ flex: 1 }}>
        <Header style={styles.header}>
          <Left style={{ flex: 1, marginHorizontal: 10 }}>
            <Icon
              name={"menu"}
              style={{ color: "black" }}
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
        </Header>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.updateTasksFromDatabase}
            />
          }
        >
          <View
            style={[
              styles.container,
              { paddingBottom: this.state.viewPadding }
            ]}
          >
            <FlatList
              style={styles.list}
              data={this.state.tasks}
              renderItem={({ item, index }) => (
                <View>
                  <View style={styles.listItemCont}>
                    <Text style={styles.listItem}>{item.text}</Text>
                    <Button
                      title="X"
                      onPress={() => this.deleteTaskFromDatabase(index)}
                    />
                  </View>
                  <View style={styles.hr} />
                </View>
              )}
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
        </ScrollView>
      </View>
    );
  }
}

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
    backgroundColor: "#AB0032"
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
    backgroundColor: "#ff5c5c",
    color: "black",
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: isAndroid ? 0 : 1,
    width: "100%"
  }
});
