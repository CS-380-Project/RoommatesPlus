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
                <View style={{justifyContent: 'center', height: 800 }}>

                <Text style={styles.headline}>Email</Text>
                <TextInput style = {styles.textInput} placeholder = "Email Address"
                value={this.state.email}
                 onChangeText={(email) => this.setState({email})}
                 />

                <Text style={styles.headline}>Password</Text>
                <TextInput style = {styles.textInput} placeholder = "Password" 
                value={this.state.password}
                onChangeText={(password) => this.setState({password})}
                />
                
                <Text style={styles.headline}>Confirm Password</Text>
                <TextInput style = {styles.textInput} placeholder = "Confirm Password"/>

                <TouchableOpacity style={styles.button} 
                onPress = {() => {Fire.shared.createUser(this.state.email, this.state.password); this.props.navigation.navigate('Roommates');}}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
</View>
            </View>
        );
    }
}

