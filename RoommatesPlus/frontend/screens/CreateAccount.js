import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Fire from '../../backend/Fire';


export default class CreateAccount extends Component {
    state = {
        email:'',
        password: '',
        dataBaseContents: ''
    };

    render() {
        return (
            <View style = {styles.container}>
                <Text>Name</Text>
                <TextInput style = {styles.textInput} placeholder = "First Name"/>
                <TextInput style = {styles.textInput} placeholder = "Last Name"/>

                <Text>Gender</Text>
                <TextInput style = {styles.textInput} placeholder = "Gender"/>

                <Text>Phone Number</Text>
                <TextInput style = {styles.textInput} placeholder = "Phone Number"/>

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
                onPress = {() => {Fire.shared.createUser(this.state.email, this.state.password); this.props.navigation.navigate('Roommates');}}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

