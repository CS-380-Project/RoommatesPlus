import { State } from "react-native-gesture-handler";
import firebase from 'firebase';

class UserData {
    
    constructor(){
        this.first_name = '';
        this.last_name = '';
        this.gender = '';
        this.phone_number = '';
        this.email = '';
        this.docId = '';
    }

    updateUserData(firstName, lastName, gender, phoneNum, email){
        this.first_name = firstName;
        this.last_name = lastName;
        this.gender = gender;
        this.phone_number = phoneNum;
        this.email = email;
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
                UserData.shared.setDocId(doc.id);
                console.log('DOC ID AFTER SETTING: ' + UserData.shared.DocId);
            })          
        })
        .catch(err => {
            console.log('Error getting documents', err);
        }); 
    }

    setDocId = (docId) =>{
        this.docId = docId;
    }

    get DocId(){
        return this.docId;
    }
    
    
}

UserData.shared = new UserData();
export default UserData;