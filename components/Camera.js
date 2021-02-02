import React, { PureComponent } from 'react';
import { TouchableOpacity, Alert, View, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';

import styles from '../styles/styles';


class Camera extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      takingPic: false,
    };
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {
        quality: 0.5,
        base64: true,
      };

      try {
        const data = await this.camera.takePictureAsync(options);

        const response = await fetch('http://10.0.2.2:5000/api', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: data.base64,
        });

        console.log(response);

        const responseData = await response.json();
        console.log(responseData);

        // Alert.alert('Success', JSON.stringify(data.base64));
        // Alert.alert('Success', data.base64);

      } catch (err) {
        Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
        console.log(err);
        return;
      } finally {
        this.setState({takingPic: false});
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          captureAudio={false}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Camera;
