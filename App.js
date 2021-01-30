import React, { PureComponent } from 'react'
import { View, Text } from 'react-native';

import Navigator from './components/homeStack';
import Camera from './components/Camera';


class App extends PureComponent {
  render() {
    return (
      <Navigator />
    );
  }
}

export default App;
