import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-5ce88.cloudfunctions.net';

class SignupForm extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = { phone: '' };
  // }

  state = { phone: '' }

  // handleSubmit() {
  // if we do this, need to bind this in invocation
  // }

  // handleSubmit = () => {
    // axios.post(`${ROOT_URL}/createUser`, {
    //   phone: this.state.phone
    // })
    //   .then(() => {
    //     axios.post(`${ROOT_URL}/requestOneTimePassword`, {
    //       phone: this.state.phone
    //     })
    //   })
  // }

  handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
    } catch(e) {
      console.log(e);
    }
  }



  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}

export default SignupForm;
