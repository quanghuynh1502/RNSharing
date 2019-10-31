import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HOME SCREEN</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});