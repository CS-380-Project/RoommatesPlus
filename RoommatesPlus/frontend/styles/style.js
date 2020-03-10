 import { StyleSheet } from 'react-native';

 const cwuColor = '#AB0032'

 // styles
export const styles = StyleSheet.create({
  
  header: {
    backgroundColor: '#AB0032'
  },
                                        
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 60
  },
  
  button: {
    borderRadius: 35,
    height: 70,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#AB0032',
    marginVertical: 5,
    marginHorizontal: 20
  },
  
  buttonText: {
    fontWeight:'bold',
    fontSize: 20,
    color: 'white',
    
  },

  textInput: {
    height: 40,
    width: 250,
    borderColor: 'white',
    borderWidth: 1,
    marginHorizontal: 60,
    backgroundColor: 'grey',
  },
  
  headline: {
    //textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 60,
    color: 'black',
    
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
  
  // Login Page---------------------------------------------------------------------------
  Loginbutton: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: cwuColor,
    marginHorizontal: 60,
  },
  
  LoginbuttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: '',
    color: 'white',
  },

  LogintextInput: {
    height: 40,
    width: 250,
    borderColor: 'white',
    borderWidth: 1,
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: 60,
    backgroundColor: 'grey',
  },
  
  Loginheadline: {
    fontWeight: 'bold',
    fontSize: 24,
    alignItems: 'stretch',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 60,
    color: 'white',
  },
  
  Loginfooter:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 0,
    justifyContent: 'center'
  },

  // Create account page---------------------------------------------------------------------------
  CreateAccountheader: {
      fontSize: 24,
      color: 'black',
      fontWeight: 'bold',
      paddingBottom: 10,
      marginBottom: 40,
      borderBottomColor: cwuColor,
      borderBottomWidth: 1,
      marginHorizontal: 55,
  },

  CreateAccountbutton: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: cwuColor
  },
  
  CreateAccountbuttonText: {
    fontWeight:'bold',
    fontSize: 20,
    color: 'white',
  },

  CreateAccounttextInput: {
    height: 40,
    alignSelf: 'stretch',
    marginBottom: 30,
    color: '#AB0032',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
      
  },
  
 // CreateAccountheadline: {
    //textAlign: 'center',
   // fontWeight: 'bold',
   // fontSize: 24,
   // alignItems: 'stretch',
   // flexDirection: 'row',
   // justifyContent: 'center',
   // marginHorizontal: 60,
   // color: 'white',
    
//  },
  
  CreateAccountfooter:{
    textAlign: 'center',
    //alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 0,
    // width: 200,
    //backgroundColor: 'green',
    justifyContent: 'center'
      
  },

  //--------------------------------------Profile Display------------------------------------
  Profileheader: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    paddingBottom: 10,
    marginBottom: 20,
    borderBottomColor: '#AB0032',
    borderBottomWidth: 1,
    //marginHorizontal: 55,

},

//-----------------------------create household display------------------------------
CreateHouseholdheader: {
  fontSize: 24,
  color: 'black',
  fontWeight: 'bold',
  paddingBottom: 10,
  marginBottom: 40,
  borderBottomColor: '#AB0032',
  borderBottomWidth: 1,
  marginHorizontal: 55,

},



CreateHouseholdtextInput: {
  height: 40,
  alignSelf: 'stretch',
  marginBottom: 30,
  color: '#AB0032',
  borderBottomColor: 'black',
  borderBottomWidth: 1,
    
},

CreateHouseholdbutton: {
  marginTop:10,
  height:45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:20,
  width:250,
  borderRadius:30,
  backgroundColor: "#AB0032"
  
},
CreateHouseholdbuttonText: {
  fontWeight:'bold',
  fontSize: 20,
  color: 'white',
  
},

//----------------------------Settings Display----------------------------------------------

Settingsheader: {
  fontSize: 24,
  color: 'black',
  fontWeight: 'bold',
  paddingBottom: 10,
  marginBottom: 40,
  borderBottomColor: '#AB0032',
  borderBottomWidth: 1,
  marginHorizontal: 65,

},

Settingsbutton: {
  marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#AB0032"
  
},

SettingsbuttonText: {
  fontWeight:'bold',
  fontSize: 20,
  color: 'white',
  
},
});