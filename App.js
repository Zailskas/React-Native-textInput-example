import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

let userIndex = 0
export default class App extends Component {
  constructor(){
    super()
      this.state = {
        firstname: '', 
        lastname: '', 
        firsNamevalue: '',
        lastNamevalue: '', 
        users: []
      }
  }

  inputChangeFirstName(firstNamevalue){
    console.log('Input value:', firstNamevalue)
    this.setState({firstNamevalue})
  }
  inputChangeLastName(lastNamevalue){
    console.log('Input value:', lastNamevalue)
    this.setState({lastNamevalue})
  }
  insertValues= () => {
    const user = {
      firstname: this.state.firstNamevalue,
      lastname: this.state.lastNamevalue,
      userIndex
    }
    userIndex++
    const users = [...this.state.users, user]
    this.setState({ users, firstNamevalue: '', lastNamevalue: ''}, () => {
      console.log(this.state.users[0])
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {borderBottomWidth: 2 , borderBottomColor: 'black'}]}>
          <Text>Hello</Text>
          <TextInput
            style={{height: 30, borderColor: 'green', borderWidth: 1 }}
            placeholder="Firstname"
            value={this.state.firstNamevalue}
            onChangeText={(text) => this.inputChangeFirstName(text)}
          />
          <TextInput
            style={{height: 30, borderWidth: 1, borderColor: 'green'}}
            placeholder="Lastname"
            value={this.state.lastNamevalue}
            onChangeText={(text)=> this.inputChangeLastName(text)}
          />
          <Button
          title='Insert'
          style = {{padding: 10}}
          onPress={this.insertValues}
        />
        </View>

        <View style={styles.box}>
          <FlatList
            keyExtractor={(user)=> user.key}
            data={this.state.users}
            renderItem={({item})=> {
              return (
                <Text>
                  Vardas: {item.firstname} Pavarde: {item.lastname}
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

