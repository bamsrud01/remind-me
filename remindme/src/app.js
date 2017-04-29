//  Import libraries
import React, { Component } from 'react';
import { View } from 'react-native';

//  Import components
import Header from './components/Header';

//  Create App component
class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="Remind Me!" />
      </View>
    );
  }
}

//  Export App component
export default App;
