import { State } from "react-native-gesture-handler";

class UserData {
    
    constructor(){
        this.first_name = '';
        this.last_name = '';
        this.gender = '';
        this.phone_number = '';
        this.email = '';
    }

    updateUserData(firstName, lastName, gender, phoneNum, email){
        this.first_name = firstName;
        this.last_name = lastName;
        this.gender = gender;
        this.phone_number = phoneNum;
        this.email = email;
    }

    get FirstName(){
        return this.first_name;
    }

    get LastName(){
        return this.last_name;
    }

    get Gender(){
        return this.gender;
    }

    get PhoneNumber(){
        return this.phone_number;
    }

    get Email(){
        return this.email;
    }
}

UserData.shared = new UserData();
export default UserData;