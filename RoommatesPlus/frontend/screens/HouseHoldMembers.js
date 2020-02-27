import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

const DATA = [
  {
    id: 'HsHldMembs',
    title: 'HouseHold Members',
    button: 'HsHldMembs'
  },
  {
    id: 'HsHldMsg',
    title: 'Messaging',
  },
  {
    id: 'HsHldChres',
    title: 'Chores',
  },
  {
    id: 'HsHldAgreement',
    title: 'HouseHold Agreement',
  },
  {
    id: 'HsHldInv',
    title: 'Invite Member',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
                      <TouchableOpacity onPress = {() => this.props.navigation.navigate(styles.button)}
          style = {styles.button}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});