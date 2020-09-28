import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

let userIndex = 0

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstNameValue: '',
      lastNameValue: '',
      firstname: '',
      lastname: '',
      users: []
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
    const user = {
      firstname: this.state.firstNameValue,
      lastname: this.state.lastNameValue, 
      userIndex,      
    }
    userIndex++
    const users = [...this.state.users, user]
    this.setState({ users, firstNameValue: '', lastNameValue: '' }, ()=>{
      console.log(this.state.users[0])
    }
    )
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
          <FlatList
            keyExtractor={(user) => user.key}
            data={this.state.users}
            renderItem={({item})=> {
              return (
                <Text style={styles.textStyle}>
                    Firstname: {item.firstname} Lastname: {item.lastname}
                </Text>
              )
            }}
          />
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

