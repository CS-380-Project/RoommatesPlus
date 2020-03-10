import firebase from 'firebase'; 
import firestore from 'firebase/firestore';
import UserData from './UserData';

class Fire {

    constructor() {
        this.init();
        this.observeAuth();
        this.docId = '';
    }
    
    init = () => {

          firebase.initializeApp({
            apiKey: "AIzaSyBDs8EtbFhh6Cx7SlkjN98laV67X0Q6Aes",
            authDomain: "hello-world-34ca8.firebaseapp.com",
            databaseURL: "https://hello-world-34ca8.firebaseio.com",
            projectId: "hello-world-34ca8",
            storageBucket: "hello-world-34ca8.appspot.com",
            messagingSenderId: "829082593909",
            appId: "1:829082593909:web:f4490ce4cd84434dd0e63c",  
          });
        
    };
    

    observeAuth() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
               return user;
            } else {
               console.log('failed (in else of observeAuth() )')
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

    findDocId = (collection, fieldX, fieldY) => {
        console.log('findDocId => collection: ' + collection + ' fieldX: ' + fieldX + ' fieldY: ' + fieldY );
        let ref = firebase.firestore().collection(collection);
        let query = ref.where(fieldX, '==', fieldY).get()
        .then(snapshot => {
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }  
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
                console.log('WE HAVE FOUND THE DOCUMENT AND WILL SET THE ID ' + doc.id);
                Fire.shared.setDocId(doc.id);
                console.log('DOC ID AFTER SETTING: ' + Fire.shared.DocId);
            })          
        })
        .catch(err => {
            console.log('Error getting documents', err);
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

    setDocId = (docId) =>{
        this.docId = docId;
    }

    get DocId(){
        return this.docId;
    }
}

Fire.shared = new Fire();

export default Fire;