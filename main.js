import Expo from 'expo';
import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';

import SignupForm from './components/SignupForm';
import SigninForm from './components/SigninForm';

class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyCU4S44Z8IRt14KXMlHNprOsoFzKVUm8os",
      authDomain: "one-time-password-5ce88.firebaseapp.com",
      databaseURL: "https://one-time-password-5ce88.firebaseio.com",
      projectId: "one-time-password-5ce88",
      storageBucket: "one-time-password-5ce88.appspot.com",
      messagingSenderId: "696400618580"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignupForm />
        <SigninForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

Expo.registerRootComponent(App);
