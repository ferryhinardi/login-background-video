import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import Video from 'react-native-video';
import VideoBackground from '../videoplayback.mp4';

export default class App extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
    sourceBackgroundVideo: PropTypes.any,
    headerText: PropTypes.string,
  }

  static defaultProps = {
    sourceBackgroundVideo: VideoBackground,
    onLogin: () => {},
    headerText: 'Login',
  }

  render() {
    const {
      headerText,
      onLogin,
      propsUsername,
      styleUsername,
      propsPassword,
      stylePassword,
      propsButtonLogin,
      styleButtonLogin,
      sourceBackgroundVideo,
    } = this.props;

    return (
      <View style={styles.container}>
        <Video
          repeat
          source={sourceBackgroundVideo}
          resizeMode="cover"
          style={StyleSheet.absoluteFill}
        />
        <View>
          <Text style={styles.header}>{headerText}</Text>
          <TextInput
            placeholder="Email / Username"
            style={StyleSheet.flatten(
              styles.input,
              styleUsername
            )}
            underlineColorAndroid="#FFF"
            {...propsUsername}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={StyleSheet.flatten(
              styles.input,
              stylePassword
            )}
            underlineColorAndroid="#FFF"
            {...propsPassword}
          />
          <Button
            onPress={onLogin}
            title="Login"
            color="#841584"
            style={StyleSheet.flatten(
              styles.button,
              styleButtonLogin
            )}
            {...propsButtonLogin}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    backgroundColor: 'transparent',
    color: '#FFF',
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: '#FFF',
    marginVertical: 15,
    paddingLeft: 15,
  },
  button: {
    flex: 1,
    width: '100%',
  }
});
