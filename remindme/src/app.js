//  Import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//  Create App component
class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello!</Text>
      </View>
    );
  }
}

//  Create styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

//  Export App component
export default App;
