import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, TextInput } from 'react-native';
import {Header, Left, Icon} from 'native-base';

export default class Calendar extends Component {

    render() {
        return (
            <View style = {{flex: 1}}>
                <Header style = {styles.header}>
                    <Left style = {{flex: 1, marginHorizontal: 10}}>
                    <Icon name={'menu'} style={{color: 'black'}} onPress={() => this.props.navigation.openDrawer()}/>
                    </Left>
                </Header>
                <View style = {styles.container}>
                    <Text>Calendar Screen</Text>
                </View>
            </View>
        );
    }
}