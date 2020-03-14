import firebase from 'firebase'; // 4.8.1

class FireMessage {
  constructor() {
    this.init();
    this.observeAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyA4RsDJumMfFG6BGnZv-mdNpSDEq8QbdC8",
        authDomain: "roommatesplus-15f85.firebaseapp.com",
        databaseURL: "https://roommatesplus-15f85.firebaseio.com",
        projectId: "roommatesplus-15f85",
        storageBucket: "roommatesplus-15f85.appspot.com",
        messagingSenderId: "300422015917",
        appId: "1:300422015917:web:cf273f19cf90e3b595cf24",
        measurementId: "G-B4PHE4YGZK" 
      });
    }
  };

  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = user => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref('users');
  }

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };

  on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
  // send the message to the Backend
  send = users => {
    for (let i = 0; i < users.length; i++) {
      const { text, user } = users[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };

  append = users => this.ref.push(users);

  // close the connection to the Backend
  off() {
    this.ref.off();
  }
}

FireMessage.shared = new FireMessage();
export default FireMessage;
