import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Fire from '../../backend/Fire';


export default class CreateAccount extends Component {
    state = {
        email:'',
        password: '',
        firstName: '',
        lastName: '',
        gender: '',
        phoneNumber: '',
      //  fire: Fire.init(),
        
    };

    render() {
        return (
            <View style = {styles.container}>
                <Text>Name</Text>
                <TextInput style = {styles.textInput} placeholder = "First Name"   value={this.state.firstName}
                 onChangeText={(firstName) => this.setState({firstName})}/>
                <TextInput style = {styles.textInput} placeholder = "Last Name"   value={this.state.lastName}
                 onChangeText={(lastName) => this.setState({lastName})}/>
                

                <Text>Gender</Text>
                <TextInput style = {styles.textInput} placeholder = "Gender"value={this.state.gender}
                onChangeText={(gender) => this.setState({gender})}/>

                <Text>Phone Number</Text>
                <TextInput style = {styles.textInput} placeholder = "Phone Number" value={this.state.phoneNumber}
                onChangeText={(phoneNumber) => this.setState({phoneNumber})}/>

                <Text>Email</Text>
                <TextInput style = {styles.textInput} placeholder = "Email Address"
                value={this.state.email}
                 onChangeText={(email) => this.setState({email})}
                 />

                <Text>Password</Text>
                <TextInput style = {styles.textInput} placeholder = "Password" 
                value={this.state.password}
                onChangeText={(password) => this.setState({password})}
                />
                
                <Text>Confirm Password</Text>
                <TextInput style = {styles.textInput} placeholder = "Confirm Password"/>

                <TouchableOpacity style={styles.button} 
                onPress = {() => {Fire.shared.createUser(this.state.firstName,
                 this.state.lastName, this.state.gender, this.state.phoneNumber, null, this.state.email);  this.props.navigation.navigate('Roommates');}}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

