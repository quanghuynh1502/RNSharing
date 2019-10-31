import React from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class LoginScreen extends React.Component {
  state = {
    username: '',
    password: ''
  }

  _onPressLogin = async () => {
    if (this.state.username === 'Admin' && this.state.password === 'Admin') {
      await AsyncStorage.setItem('token', 'abc')
      this.props.navigation.navigate('HomeStack')
    } else {
      alert('Error')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder='Username' onChangeText={(text) => this.setState({username: text})}/>
        <TextInput style={styles.textInput} placeholder='Password' onChangeText={(text) => this.setState({password: text})}/>
        <TouchableOpacity style={styles.btnLogin} onPress={this._onPressLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 300,
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 20
  },
  btnLogin: {
    backgroundColor: '#e65765',
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});