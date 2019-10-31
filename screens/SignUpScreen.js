import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default class SignUpScreen extends React.Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
  }

  _onPressSignUp = async () => {
    //handle sign up
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imgLogo} source={require('../assets/images/KMS-Logo.png')}/>
        <Text style={styles.title}>SIGN UP SCREEN</Text>
        <TextInput style={styles.input} placeholder='Username' onChangeText={(text) => this.setState({ 'username': text })} />
        <TextInput style={styles.input} placeholder='Password' onChangeText={(text) => this.setState({ 'password': text })} />
        <TextInput style={styles.input} placeholder='Confirm Password' onChangeText={(text) => this.setState({ 'confirmPassword': text })} />
        <TouchableOpacity style={styles.btnSignUp} onPress={this._onPressSignUp}>
          <Text style={styles.btnTitle}>SIGN UP</Text>
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
  imgLogo: {
    width: '50%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 50
  },
  title: {
    fontSize: 30,
    marginBottom: 50,
  },
  input: {
    width: '90%',
    marginBottom: 20,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 8,
  },
  btnSignUp: {
    width: '90%',
    height: 40,
    backgroundColor: '#e65765',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTitle: {
    color: 'white'
  }
});