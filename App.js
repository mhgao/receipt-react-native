/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import { RNCamera } from 'react-native-camera';

import React, { PureComponent } from 'react'
import { StyleSheet, Text, TouchableOpacity, Alert, View } from 'react-native';

import Camera from './components/Camera'

class App extends PureComponent {
  render() {
    return (
      <Camera />
    );
  }
}

export default App;
