import React from 'react'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'

import AppNavigator from './navigation/AppNavigator'

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
