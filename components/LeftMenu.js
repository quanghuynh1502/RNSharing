import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, AsyncStorage } from 'react-native';

export default class LeftMenu extends React.Component {
  _onPressLogout = async () => {
    //handle when press Logout button
    await AsyncStorage.clear()
    this.props.navigation.navigate('AuthTabs')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnLogout} onPress={this._onPressLogout}>
          <Text style={styles.btnTitle}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnLogout: {
    width: 100,
    height: 40,
    backgroundColor: '#e65765',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitle: {
    color: 'white'
  }
});