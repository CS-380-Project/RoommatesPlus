import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import {Header, Left, Icon} from 'native-base';
import { styles } from '../styles/style';

export default class Messaging extends React.Component {
  render() {
    return (
        <View style = {{flex: 1}}>
            <Header style = {styles.header}>
                <Left style = {{flex: 1, marginHorizontal: 10}}>
                <Icon name={'menu'} style={{color: 'black'}} onPress={() => this.props.navigation.openDrawer()}/>
                </Left>
            </Header>
            <View style = {styles.container}>
                <Text>Messaging Screen</Text>
            </View>
        </View>
    );
  }
}  
