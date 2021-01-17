import React, { PureComponent } from 'react'
import { View, Text } from 'react-native';

import Camera from './components/Camera'

class App extends PureComponent {
  render() {
    return (
      <Camera />
    );
  }
}

export default App;
