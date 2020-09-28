import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstname: ''
    }
  }
  insertValues = () => {
    console.log(this.state.firstname)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {borderBottomColor: 'black', borderBottomWidth: 2}]}>
          <Text>Test</Text>
          <TextInput
            style={{height: 30, borderColor: 'green', borderWidth: 1 }}
            placeholder="Firstname"
            onChangeText = {(firstname) => this.setState({firstname})}
          />
          <Button
            title='Insert'
            style={{padding: 10}}
          />
        </View>
        <View style={styles.box}>
          <Text>{this.state.firstname}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  box: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  }
});

