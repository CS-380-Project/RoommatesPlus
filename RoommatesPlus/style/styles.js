import { StyleSheet } from 'react-native';

// styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
    
  button: {
    borderRadius: 8,
    width: 200,
    height: 40,
    marginTop: 15,
    alignItems: 'center',
    backgroundColor: '#AB0032',
    padding: 10,
  },
  
  buttonText: {
    color: 'white',
    fontSize: 15,
  },

  textInput: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1
  },
  
  headline: {
    //textAlign: 'center',
    fontWeight: 'bold',
    //fontSize: 24,
    alignItems: 'stretch',
    flexDirection: 'row',
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