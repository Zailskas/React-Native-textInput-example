import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstNameValue: '',
      lastNameValue: '',
      firstname: '',
      lastname: ''
    }
  }
  inputChangeFirstName(firstNameValue) {
    console.log('Input value:', firstNameValue)
    this.setState({firstNameValue})
  }
  inputChangeLastName(lastNameValue) {
    console.log('Input value:', lastNameValue)
    this.setState({lastNameValue})
  }
  insertValues = () => {
    this.setState({
      firstname: this.state.firstNameValuinpe,
      lastname: this.state.lastNameValue
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {borderBottomColor: 'black', borderBottomWidth: 2}]}>
          <Text>Test</Text>
          <TextInput
            style={{height: 30, borderColor: 'green', borderWidth: 1 }}
            placeholder="Firstname"
            value={this.state.firstNameValue}
            onChangeText={(text) => this.inputChangeFirstName(text)}
          />
          <TextInput
            style={{height: 30, borderColor: 'green', borderWidth: 1 }}
            placeholder="Lastname"
            value={this.state.lastNameValue}
            onChangeText={(text) => this.inputChangeLastName(text)}
          />
          <Button
            title='Insert'
            style={{padding: 10}}
            onPress={this.insertValues}
          />
        </View>
        <View style={styles.box}>
          <Text>{this.state.firstname}</Text>
          <Text>{this.state.lastname}</Text>
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

