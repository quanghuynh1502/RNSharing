import React from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this.checkLogin()
  }

  checkLogin = async () => {
    token = await AsyncStorage.getItem('token')
    this.props.navigation.navigate(token ? 'HomeStack' : 'AuthTabs')
  }

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});