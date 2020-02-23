import firebase from 'firebase'; 
import { Alert } from 'react-native';
import firestore from 'firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import UserData from './UserData';

class Fire {

    constructor() {
        this.init();
        this.observeAuth();
       // const db = firebase.firestore();   
    }
    
    /*user = firebase.auth().currentUser;
    name = ''; s
    email = ''; 
    photoURL = ''; 
    uid = ''; 
    emailVerified = '';*/
    

    init = () => firebase.initializeApp({
        apiKey: "AIzaSyA4RsDJumMfFG6BGnZv-mdNpSDEq8QbdC8",
        authDomain: "roommatesplus-15f85.firebaseapp.com",
        databaseURL: "https://roommatesplus-15f85.firebaseio.com",
        projectId: "roommatesplus-15f85",
        storageBucket: "roommatesplus-15f85.appspot.com",
        messagingSenderId: "300422015917",
        appId: "1:300422015917:web:cf273f19cf90e3b595cf24",
        measurementId: "G-B4PHE4YGZK"
    });



    observeAuth() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                return user;
            } else {
                console.log('failed')
               return null;
            }
        });
    }


    onAuthStateChanged = user => {
        if (!user) {
            try { 
                firebase.auth().signInAnonymously();
            } catch ({ message }) {
                alert(message);
            }
        }           
    };   

    // // sign-up
    // createUser(firstName, lastName, gender, phoneNumber, houseID, email, password){

    //     firebase.auth().createUserWithEmailAndPassword(email, password)
    //     .then(() => {
    //         firebase.firestore().collection('users').add({
    //             first_name: firstName,
    //             gender: gender,
    //             houseID: houseID,
    //             last_name: lastName,
    //             phone: phoneNumber,
    //             user_name: email,
    //         });

    //         console.log('create account successful')
    //     }) 
    //     .catch(function(error){
    //         console.log('login failed')
    //     }); 
    // }

    // signIn(email, password){
    //     firebase.auth().signInWithEmailAndPassword(email, password)
    //     .then(() => {
    //         console.log('login successful')
    //     }).catch(function(error){
    //         errorCode = error.code;
    //         errorMessage = error.message;
    //         console.log('login failed')
    //     });
    // }

    signOut(){

        firebase.auth().signOut()
        .then(() =>{
            console.log('Sign out successful')
            navigation.navigate('LoginScreen')
        }).catch((error) => {
            errorCode = error.code;
            errorMessage = error.message;
            console.log('Sign out error')
        });
       
    }
    
    get udi(){
        return firebase.auth().currentUser;

    }

    get ref(){
        return firebase.database().ref('messages?');
    }

    off(){
        this.ref.off();
    }
}

Fire.shared = new Fire();

export default Fire;