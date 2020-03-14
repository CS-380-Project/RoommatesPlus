import React, { Component } from 'react';
import { styles } from '../styles/style';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import {Header, Left, Icon} from 'native-base';
import CalendarPicker from ' ';


const isAndroid = Platform.OS == "android";
const viewPadding = 10; 

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
      }
    
      onDateChange(date) {
        this.setState({
          selectedStartDate: date,
        });
      }

    render() {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return (
                 
            <View style = {{flex: 1}}>
             <Header style = {styles.header}>
          <Left style = {{flex: 1, marginHorizontal: 10}}>
          <Icon name={'menu'} style={{color: 'black'}} onPress={() => this.props.navigation.openDrawer()}/>
          </Left>
            </Header>
            <CalendarPicker
              onDateChange={this.onDateChange}
            />
            <View>
              <Text>Chores to do:  {}</Text>
            </View>
          </View>
          
        );
      }
    } 
