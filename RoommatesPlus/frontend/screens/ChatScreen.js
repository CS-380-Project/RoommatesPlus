import * as React from 'react';
import { Platform , KeyboardAvoidingView,SafeAreaView, View } from 'react-native';
import {Header, Left, Icon} from 'native-base';
import {styles} from '../styles/style';

// @flow
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0

import FireMessage from '../../backend/FireMessage';

class ChatScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });

  state = {
    messages: [],
  };

  get user() {
    return {
      name: 'tester',
      _id: FireMessage.shared.uid,
    };
  }

  render() {
       let chat=<GiftedChat messages={this.state.messages} onSend={FireMessage.shared.send} user={this.user}/>;

        if(Platform.OS=='android'){
            return(
                
              <View style = {{flex: 1}}>
                <Header style = {styles.header}>
                    <Left style = {{flex: 1, marginHorizontal: 10}}>
                    <Icon name={'menu'} style={{color: 'black'}} onPress={() => this.props.navigation.openDrawer()}/>
                    </Left>
                </Header>
                <KeyboardAvoidingView style={{flex:1}}behavior="padding" keyboardVerticalOffset={0} enabled>
                    {chat}
                    
                </KeyboardAvoidingView>
                </View>
            );
        }
    return<SafeAreaView style={{flex:1}}>{chat}</SafeAreaView>; 
  }

  componentDidMount() {
    FireMessage.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    FireMessage.shared.off();
  }
}

export default ChatScreen;
