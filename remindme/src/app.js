//  Import libraries
import React, { Component } from 'react';
import { View } from 'react-native';

//  Import components
import { Header, Input } from './components/common';

//  Create App component
class App extends Component {

  state = {
    task: ''
  }

  render() {
    return (
      <View>
        <Header headerText="Remind Me!" />
        <Input
          placeholder="Enter message here"
          label="Task"
          value={this.state.task}
          onChangeText={task => this.setState({ task })}
        />
      </View>
    );
  }
}

//  Export App component
export default App;
