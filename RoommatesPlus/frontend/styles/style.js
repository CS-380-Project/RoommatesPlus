 import { StyleSheet } from 'react-native';

// styles
export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
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
});