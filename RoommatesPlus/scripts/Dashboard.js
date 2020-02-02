import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, AppRegistry, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

export default class Dashboard extends Component {
render(){
  return (

   <SafeAreaView style={styles.header}>
<Button
          title="Create Household"
          
          onPress={() => Alert.alert('links to page for create household')}
        />

<Button
          title="Join Household"
          
          onPress={() => Alert.alert('links to page for join household')}
        />
        
<View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 650,
  }}
/>

<Text style ={styles.footer}>Roommates</Text>
   </SafeAreaView>   
  );
}
}

const styles = StyleSheet.create({
  headline: {
    textAlign: 'center',
  alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 24,
marginTop: 10,
   // width: 200,
   //backgroundColor: 'green',
   justifyContent: 'center'

},
container:{
  textAlign: 'left',
  //alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 24,
marginTop: 100,
   // width: 200,
   //backgroundColor: 'green',
   justifyContent: 'center'
},
footer:{
  textAlign: 'center',
  //alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 24,
marginTop: 0,
   // width: 200,
   //backgroundColor: 'green',
   justifyContent: 'center'

},
});
