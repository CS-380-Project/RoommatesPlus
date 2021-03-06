import { StyleSheet } from 'react-native';

// styles
export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  
  Loginbutton: {
    borderRadius: 35,
    height: 70,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#AB0032',
    marginVertical: 5,
    marginHorizontal: 20
    
  },
  
  LoginbuttonText: {
    fontWeight:'bold',
    fontSize: 20,
    color: 'white',
    
  },

  LogintextInput: {
    height: 40,
    width: 250,
    borderColor: 'white',
    borderWidth: 1,
    marginHorizontal: 60,
    backgroundColor: 'green',
   
    
  },
  
  Loginheadline: {
    //textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 60,
    color: 'white',
    
  },
  
  Loginfooter:{
    textAlign: 'center',
    //alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 0,
    // width: 200,
    //backgroundColor: 'green',
    justifyContent: 'center'
      
  },

  // Create account page
  CreateAccountbutton: {
    borderRadius: 35,
    height: 70,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#AB0032',
    marginVertical: 20,
    marginHorizontal: 40
    
  },
  
  CreateAccountbuttonText: {
    fontWeight:'bold',
    fontSize: 20,
    color: 'white',
    
  },

  CreateAccounttextInput: {
    height: 40,
    width: 250,
    borderColor: 'white',
    borderWidth: 1,
    marginHorizontal: 60,
    backgroundColor: 'grey',
   
    
  },
  
  CreateAccountheadline: {
    //textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 60,
    color: 'white',
    
  },
  
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
});